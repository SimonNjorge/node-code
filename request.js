
fetch('http://locahost:8000/', {
   method: 'POST',
   body: 'hello server'
}).then((resp) => resp.text()).then(console.log)