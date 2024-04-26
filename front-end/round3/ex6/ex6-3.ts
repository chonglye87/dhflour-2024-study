// 2. 옵셔널 체이닝 (Optional Chaining)
// 옵셔널 체이닝 ?.은 객체의 프로퍼티에 접근할 때 해당 프로퍼티가 존재하지 않아도 에러를 발생시키지 않고 undefined를 반환하게 해 줍니다. 이는 객체의 중첩된 프로퍼티에 안전하게 접근하고자 할 때 매우 유용합니다.

interface User {
    name: string;
    address?: {
        street: string;
        city?: {
            name: string;
            code?: number;
        };
    };
}

const user: User = {
    name: "John",
    address: {
        street: "123 Maple St",
        city: {
            name: "Anytown"
        }
    }
};

const cityName = user.address?.city?.name ?? "No City Name";
console.log(cityName, 'cityName'); // 출력: "No City Code"
const cityCode = user.address?.city?.code ?? "No City Code";
console.log(cityCode, 'cityCode'); // 출력: "No City Code"
