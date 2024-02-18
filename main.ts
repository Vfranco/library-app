import { ViewConsole } from "./src/app/view/console/view";

class Application {
  static main(): void {
    const view = new ViewConsole;
    view.showMenu();
  }
}

Application.main();
