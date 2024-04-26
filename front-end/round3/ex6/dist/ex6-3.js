// 2. 옵셔널 체이닝 (Optional Chaining)
// 옵셔널 체이닝 ?.은 객체의 프로퍼티에 접근할 때 해당 프로퍼티가 존재하지 않아도 에러를 발생시키지 않고 undefined를 반환하게 해 줍니다. 이는 객체의 중첩된 프로퍼티에 안전하게 접근하고자 할 때 매우 유용합니다.
var _a, _b, _c, _d, _e, _f;
const user = {
    name: "John",
    address: {
        street: "123 Maple St",
        city: {
            name: "Anytown"
        }
    }
};
const cityName = (_c = (_b = (_a = user.address) === null || _a === void 0 ? void 0 : _a.city) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : "No City Name";
console.log(cityName, 'cityName'); // 출력: "No City Code"
const cityCode = (_f = (_e = (_d = user.address) === null || _d === void 0 ? void 0 : _d.city) === null || _e === void 0 ? void 0 : _e.code) !== null && _f !== void 0 ? _f : "No City Code";
console.log(cityCode, 'cityCode'); // 출력: "No City Code"
//# sourceMappingURL=ex6-3.js.map