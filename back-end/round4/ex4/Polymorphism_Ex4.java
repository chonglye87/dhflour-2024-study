public class Polymorphism_Ex4 {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound();  // "멍멍" 출력
        myCat.makeSound();  // "야옹" 출력
    }
}
