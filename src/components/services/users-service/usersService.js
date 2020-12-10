export default class UsersService {
    url = 'https://jsonplaceholder.typicode.com/users';
    async ussers (){
        return await fetch(this.url).then(value => value.json())
    }
}