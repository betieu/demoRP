class Connection{
    requestData = (url,obj) => {
      console.log(url)
        fetch(url)
        .then(response => response.json())
        .then((dataResponse) => {
            obj.setData(dataResponse)
        })
        .catch(err => {
          obj.setData(0)
        });
    }
}
const connection = new Connection();
export default connection;