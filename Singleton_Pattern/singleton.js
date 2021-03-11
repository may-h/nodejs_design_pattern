module.exports = (() => {

    /*
     * 싱글톤 패턴 (Singleton)
        💡  자바스크립트 싱글톤 패턴은 클래스 함수의 인스턴스를 한개만 유지
        💡  즉, 여러 객체를 생성하더라도 최초 생성된 객체를 사용하는 것이다. 
        💡  객체에 대한 접근자(비공개 멤버: 클로저)를 사용하여 해당 객체를 공유하는 것이다.

     * 싱글톤 예제 구현 
        💡  비공개 함수 init()의 return 값을 반환하는 객체가 바로 싱글톤 객체이다. 
        💡  내부 변수에 접근하여 객체를 반환하는 클로저 패턴을 사용
        💡  즉, 객체를 여러번 생성하더라도 한개의 객체를 참조하게 되는 것이다.

    */

    // 비공개 변수, 메서드 정의 
    let instance; 

    const init = () => {

        //싱글톤 객체 정의 
        return {
            publicMethod: () => { //공개 메서드 정의 
                console.log('hello Singlethon Pattern :)')
            },
            publicProp: 'single value' //공개 속성 정의 
        }
    }

    // Public 메서드인 getInstance()를 정의한 객체. 
    // 비공개 변수를 사용하여 메서드에 접근 가능(클로저); 

    return {
        getInstance: () => {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();