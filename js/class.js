// # Class
// - prototype은 실무에서 쓸 일이 없어서 생략.
class User {
  constructor(name, email) {
      this.name = name;
      this.email = email;
      this.loggedIn = false;
  }

  login() {
      this.loggedIn = true;
      console.log(`${this.name} has logged in.`);
  }

  logout() {
      this.loggedIn = false;
      console.log(`${this.name} has logged out.`);
  }
}

class Admin extends User {
  constructor(name, email) {
      super(name, email);
      this.role = "admin";
  }

  deleteUser(user) {
      console.log(`${this.name} (admin) deleted ${user.name}.`);
  }
}

// 사용 예시
const user1 = new User("John Doe", "john@example.com");
const admin = new Admin("Admin", "admin@example.com");

user1.login();
admin.deleteUser(user1);