import validator from 'validator';
import {ValidationError} from '../utils/globalErrorHandler';
import {UserRecord} from '../records/user.record';
import {compare} from 'bcrypt';

class ValidationService {
    static async signUpDataValidation(name: string, email: string, password: string): Promise<void> {
    //#1: validate provided data:
        if (!validator.isEmail(email)) throw new ValidationError(ValidationError.messages.signup.incorrectEmail, 409)
        if (name.length < 6) throw new ValidationError(ValidationError.messages.signup.incorrectName, 409);
        if (password.length < 6) throw new ValidationError(ValidationError.messages.signup.incorrectPassword, 409);
    //#2: check if already exist,
        const emailExist = await UserRecord.findUserByNameOrEmail(email);
        const nameExist = await UserRecord.findUserByNameOrEmail(name);
        if (emailExist) throw new ValidationError(ValidationError.messages.signup.emailInUse, 409);
        if (nameExist) throw new ValidationError(ValidationError.messages.signup.nameInUse, 409);
    }

    static async singInValidation(email: string, password: string):Promise<string> {
    //#1 check if user exist:
        const targetedUser = await UserRecord.findUserByNameOrEmail(email);
        if(!targetedUser) throw new ValidationError(ValidationError.messages.login.incorrectData, 401);
    //#2 check is password correct:
        const isPasswordCorrect = await compare(password, targetedUser.password);
        if(!isPasswordCorrect) throw new ValidationError(ValidationError.messages.login.incorrectData, 401);
        return targetedUser.id;
    }
}

export {
    ValidationService,
}