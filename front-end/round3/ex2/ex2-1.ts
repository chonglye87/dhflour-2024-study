// 1. 기본 인터페이스
// 예제: 간단한 사용자 프로필을 위한 인터페이스 정의하기

interface UserProfile {
    username: string;
    email: string;
    age?: number; // 옵셔널 프로퍼티
}

function displayProfile(user: UserProfile) {
    console.log(`Username: ${user.username}, Email: ${user.email}`);
    if (user.age) {
        console.log(`Age: ${user.age}`);
    }
}

const user = {username: "johnDoe", email: "john@example.com", age: 30};
console.log('== 결과 ==');
displayProfile(user);
