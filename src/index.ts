import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Gender } from "./enums/Gender"

AppDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.nickname = "skaidos"
    user.email = "nguerra123@gmail.com"
    user.active = true
    user.gender = Gender.MALE
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")
}).catch(error => console.log(error))
