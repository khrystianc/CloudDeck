def get_available_templates():
  return [
    {
      "name": "Flask + React",
      "description": "Standard backend/frontend monorepo stack",
      "dockerized": True,
      "ci_ready": True
    },
    {
      "name": "MERN Stack",
      "description": "MongoDB, Express, React, Node.js",
      "dockerized": True,
      "ci_ready": False
    }
  ]
