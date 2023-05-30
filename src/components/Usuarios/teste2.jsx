app.post('/redirect', (req, res) => {
  const savedState = req.cookies.__session;
  const code = req.body.code;
  const state = req.body.state;
  const appleIdToken = req.body.id_token;
  if (savedState !== state || !code) {
    res.status(403).send('403: Permission denied');
  } else {
    // Sign in with Firebase using appleIdToken. (See next step).
  }
});