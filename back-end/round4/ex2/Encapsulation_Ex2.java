public class Encapsulation_Ex2 {
    public static void main(String[] args) {
        Account myAccount = new Account("홍길동", 10000);
        myAccount.deposit(5000);
        myAccount.withdraw(3000);
        System.out.println("현재 잔액: " + myAccount.getBalance());
    }
}
