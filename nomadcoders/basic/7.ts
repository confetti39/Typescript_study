abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  abstract getNickname(): void; // 추상 메소드는 call signature만 가짐
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// 추상클래스는 오직 다른 곳에서 상속 받을 수만 있는 클래스
// 추상클래스는 인스턴스를 생성할 수 없음

class Gamer extends User {
  getNickname(): void {
    console.log(this.nickname);
  }
}

const user = new Gamer("nico", "las", "니꼬");
