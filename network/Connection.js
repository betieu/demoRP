
class Connection{
    requestData = (url,obj) => {
      console.log(url)
        fetch(url)
        .then(response => response.json())
        .then((dataResponse) => {
            obj.setData(dataResponse)
        })
        .catch(err => {
          console.log('Error :-S', err)
        });
    }
}
const connection = new Connection();
export default connection;