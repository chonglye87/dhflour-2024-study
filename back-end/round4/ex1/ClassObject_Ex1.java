// 메인 클래스에서 'Dog' 객체를 생성하고 메소드를 호출
public class ClassObject_Ex1 {
    public static void main(String[] args) {
        Dog myDog = new Dog("진돗개", 5, "갈색");
        myDog.barking();
        myDog.hungry();
        myDog.sleeping();
    }
}
