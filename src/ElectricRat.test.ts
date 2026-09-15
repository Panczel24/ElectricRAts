import { describe, expect, test } from "vitest";
import { ElectricRat } from "./ElectricRat";


describe("ElectricRat konstruktor", () => {

  test("helyes adatokkal létrejön az objektum", () => {

    const rat = new ElectricRat("Rat", 15, 80);

    expect(rat.name).toBe("Rat");
    expect(rat.atk).toBe(15);
    expect(rat.hp).toBe(80);

  });

  test("konstruktor nem dob hibát", ()=>{
        expect(()=>new ElectricRat("Rat", 15, 80)).not.to.throw
    })


  test("üres név esetén kivételt dob", () => {

    expect(() => {
      new ElectricRat("", 15, 80);
    }).toThrow();

  });


  test("0 támadás esetén kivételt dob", () => {

    expect(() => {
      new ElectricRat("Rat", 0, 80);
    }).toThrow();

  });


  test("negatív támadás esetén kivételt dob", () => {

    expect(() => {
      new ElectricRat("Rat", -5, 80);
    }).toThrow();

  });



  test("0 élet esetén kivételt dob", () => {

    expect(() => {
      new ElectricRat("Rat", 15, 0);
    }).toThrow();

  });


  test("negatív élet esetén kivételt dob", () => {

    expect(() => {
      new ElectricRat("Rat", 15, -10);
    }).toThrow();

  });



});


describe("ElectricRat toCSV", () => {

  test("csv formátummá alakítás", () => {

    const rat = new ElectricRat("Rat", 15, 80);

    expect(rat.toCSV()).toBe("Rat;15;80");

  });


});