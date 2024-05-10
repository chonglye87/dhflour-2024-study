public class Account {
    // Private 변수로 캡슐화 구현
    private String ownerName;
    private double balance;

    // 생성자
    public Account(String ownerName, double balance) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    // 입금 메소드
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    // 출금 메소드
    public void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
        }
    }

    // 잔액 조회 메소드
    public double getBalance() {
        return balance;
    }
}
