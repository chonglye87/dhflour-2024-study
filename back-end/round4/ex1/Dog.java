public class Dog {
    // 필드(변수)
    String breed;
    int age;
    String color;

    // 생성자
    public Dog(String breed, int age, String color) {
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    // 메소드
    void barking() {
        System.out.println("멍멍!");
    }

    void hungry() {
        System.out.println("배고파요!");
    }

    void sleeping() {
        System.out.println("잠자는 중...");
    }
}