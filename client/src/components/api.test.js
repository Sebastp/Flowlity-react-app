var axios = require('axios');

test('test REST API response', async (done) => {
  await axios.post('http://localhost:8080/getdata').then(res=>{
    let fetchedDataLen = (res.data).length

    expect(fetchedDataLen).toBeGreaterThan(0);
    done();
  })
})
