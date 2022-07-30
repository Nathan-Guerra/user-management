import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from "tsoa";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Gender } from "../enums/Gender";

type UserCreationParams = {
    email: string
    nickname: string
    gender: Gender
}

@Route("users")
export class UsersController extends Controller {
    @Get("{userId}")
    public async getUser(
        @Path() userId: number,
    ): Promise<User> {
        return await AppDataSource.manager.findOne(User, { where: { id: userId } });
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public create(
        @Body() requestBody: UserCreationParams
    ): Promise<User> {
        const user = new User();
        user.email = requestBody.email;
        user.nickname = requestBody.nickname;
        user.gender = requestBody.gender;
        user.active = true;

        return AppDataSource.manager.save(user);
    }

    @Get()
    public async index(): Promise<User[]> {
        return await AppDataSource.manager.find(User);
    }
}