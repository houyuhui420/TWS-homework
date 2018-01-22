var mainFunction = require('./function.js');
var expect = require('chai').expect;

describe('主要函数测试', function() {
    describe('testId',function(){
        it('plane1应该返回true',function(){
            expect(mainFunction.testId('plane1')).to.be.equal(true);
        });
        it('第1架飞机应该返回false', function () {
            expect(mainFunction.testId('第1架飞机')).to.be.equal(false);
        });
    });
    describe('testNum',function(){
        it('["1","2","3"]应该返回true',function(){
            expect(mainFunction.testNum([ 'plane1', '1', '1', '1' ])).to.be.equal(true);
        });
        it('["1","f","3"]应该返回false',function(){
            expect(mainFunction.testNum(['1','f','3'])).to.be.equal(false);
        });
        it('["a","f","g"]应该返回false',function () {
            expect(mainFunction.testNum(['a','f','g'])).to.be.equal(false);
        })
    });
    describe('testCoord',function() {
        it('坐标测试1应该返回true',function(){
            expect(mainFunction.testCoord([ 'plane1', '1', '1', '1' ],[ 'plane1', '1', '1', '1', '1', '2', '3' ])).to.be.equal(true);
        });
        it('坐标测试2应该返回true',function(){
            expect(mainFunction.testCoord([ 'plane1', '1', '1', '1', '1', '2', '3'],['plane1', '2', '3', '4', '1', '1', '1'])).to.be.equal(true);
        });
        it('坐标测试3应该返回false',function(){
            expect(mainFunction.testCoord([ 'plane1', '4', '1', '6', '1', '2', '3'],['plane1', '2', '3', '4', '1', '1', '1'])).to.be.equal(false);
        });
    });
});