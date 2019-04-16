import { randomDailyMessage } from "../../commands/daily-messages";
import { wrapAsyncFunc } from "../../../utils/wrap-async-route";

export default class AuthController {
  constructor(router) {
    router.get("/message", wrapAsyncFunc(this.getMessage));
  }

  async getMessage(req, res) {
    const message = await randomDailyMessage();
    res.send({ message });
  }
}
