import React, { useEffect, useState } from 'react';

const StackLauncher = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedStack, setSelectedStack] = useState('');
  const [repoName, setRepoName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/templates/')
      .then(res => res.json())
      .then(data => setTemplates(data.templates))
      .catch(err => console.error('Error fetching templates:', err));
  }, []);

  const handleLaunch = async () => {
    setStatus('Initializing repo...');
    try {
      const initRes = await fetch('/api/github/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repo_name: repoName, stack: selectedStack })
      });
      const initData = await initRes.json();

      if (!initRes.ok) throw new Error(initData.error || 'GitHub init failed');

      setStatus('Repo initialized. Deploying...');

      const deployRes = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repo_url: initData.repo_url })
      });

      const deployData = await deployRes.json();

      if (!deployRes.ok) throw new Error(deployData.error || 'Deploy failed');

      setStatus(`Deploy triggered: ${deployData.status}`);
    } catch (error) {
      console.error('Error:', error);
      setStatus(error.message);
    }
  };

  return (
    <div>
      <h2>Launch a Stack</h2>
      <label>
        Repository Name:
        <input value={repoName} onChange={(e) => setRepoName(e.target.value)} />
      </label>
      <br />
      <label>
        Select Stack:
        <select value={selectedStack} onChange={(e) => setSelectedStack(e.target.value)}>
          <option value="">-- Choose a template --</option>
          {templates.map((t, index) => (
            <option key={index} value={t.name}>{t.name}</option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleLaunch} disabled={!repoName || !selectedStack}>
        Launch Project
      </button>
      <p>{status}</p>
    </div>
  );
};

export default StackLauncher;