## Multiplication and Division

Multiplication is repeated addition. Division is repeated subtraction — or more precisely, the process of splitting a quantity into equal groups. These two operations are inverses of each other, just as addition and subtraction are. Master these and you have the full foundation of arithmetic.

---

## Multiplication: Repeated Addition

If you add 6 three times — 6 + 6 + 6 — you get 18. Multiplication writes this more efficiently as 3 × 6 = 18.

The numbers being multiplied are called **factors**. The result is the **product**.

```
factor × factor = product
    7   ×    8  =   56
```

### The Multiplication Table

Before using any algorithm, you should have the times tables through 12 × 12 memorized or at minimum be able to derive them quickly. This is not busywork — it is the vocabulary of arithmetic. Every long multiplication and every division problem depends on it.

Key patterns that help:
- **× 2:** Double the number. 7 × 2 = 14.
- **× 5:** The product ends in 0 or 5. 8 × 5 = 40.
- **× 9:** The digits of the product sum to 9. 9 × 7 = 63 (6 + 3 = 9).
- **× 10:** Append a zero. 14 × 10 = 140.
- **× 11 (single digit):** The digit repeats. 11 × 6 = 66.

### The Standard Algorithm (Long Multiplication)

**Example:** 47 × 38

Step 1: Multiply 47 by 8 (ones digit of 38):
```
   47
×  38
-----
  376   (47 × 8)
```
47 × 8: 7 × 8 = 56 (write 6, carry 5); 4 × 8 = 32 + 5 = 37. → 376

Step 2: Multiply 47 by 30 (tens digit of 38), shifting one place left:
```
 1410   (47 × 30, written as 47 × 3 shifted one position)
```
47 × 3: 7 × 3 = 21 (write 1, carry 2); 4 × 3 = 12 + 2 = 14. → 141, shifted: 1410

Step 3: Add the partial products:
```
  376
+1410
-----
 1786
```

47 × 38 = **1,786**

---

## Properties of Multiplication

**Commutative:** 6 × 9 = 9 × 6 = 54. Order doesn't matter.

**Associative:** (3 × 4) × 5 = 3 × (4 × 5) = 60. Grouping doesn't matter.

**Distributive:** Multiply across a sum.
- 7 × (10 + 3) = 7 × 10 + 7 × 3 = 70 + 21 = 91
- This is how mental math works: 7 × 13 = 7 × 10 + 7 × 3 = 91.

**Identity:** Any number times 1 equals itself. 94 × 1 = 94.

**Zero Property:** Any number times 0 equals 0. 847 × 0 = 0.

---

## Division: Splitting into Equal Groups

Division answers: "How many times does this number fit into that number?"

The number being divided is the **dividend**. The number dividing it is the **divisor**. The result is the **quotient**. What's left over (if anything) is the **remainder**.

```
dividend ÷ divisor = quotient  remainder r
    17   ÷    5   =    3       remainder 2
```

Because 5 × 3 = 15, and 17 - 15 = 2.

### Long Division

**Example:** 845 ÷ 6

```
      140 r 5
    -------
6 | 845
    6
    ---
     24
     24
    ---
      05
       0
    ---
       5
```

Step by step:
1. How many times does 6 go into 8? Once (6 × 1 = 6). Write 1 above. Subtract: 8 - 6 = 2.
2. Bring down the 4. New number: 24. 6 goes into 24 four times (6 × 4 = 24). Write 4. Subtract: 0.
3. Bring down the 5. New number: 5. 6 goes into 5 zero times. Write 0. Remainder: 5.

Result: **140 remainder 5**, or equivalently, 140 and 5/6.

---

## Division and Multiplication Are Inverses

Every division fact corresponds to a multiplication fact:
- 56 ÷ 7 = 8, because 7 × 8 = 56
- 81 ÷ 9 = 9, because 9 × 9 = 81

This means you can always check a division result by multiplying: quotient × divisor + remainder = dividend.

Check: 140 × 6 + 5 = 840 + 5 = 845. ✓

---

## Interpreting Remainders

A remainder is not always an error — it depends on the context.

**Scenario 1:** 17 people need to be transported in vans that hold 5. How many vans?
- 17 ÷ 5 = 3 remainder 2. You need **4 vans** — round up because the last 2 people still need a vehicle.

**Scenario 2:** 17 cookies shared equally among 5 people. How many does each person get?
- 17 ÷ 5 = 3 remainder 2. Each person gets **3 cookies** and 2 are left over. Don't round up — you can't give someone a partial cookie without cutting it.

**Scenario 3:** The answer needs to be a fraction or decimal.
- 17 ÷ 5 = 3.4 (continue the division past the decimal point)

---

## Mental Math Shortcuts

**Multiplying by powers of 10:** Append zeros.
- 37 × 100 = 3,700

**Dividing by powers of 10:** Remove zeros (if they exist).
- 4,500 ÷ 100 = 45

**Halving and doubling:** For × 4, double twice. For ÷ 4, halve twice.
- 23 × 4 = (23 × 2) × 2 = 46 × 2 = 92
- 84 ÷ 4 = 42 ÷ 2 = 21

---

## Practice

1. 64 × 27 = ?
2. 1,356 ÷ 4 = ?
3. A job pays $18 per hour. An employee works 45 hours. What is the gross pay?
4. 324 bolts need to be packed into boxes of 12. How many full boxes? How many left over?
5. Check: Is 52 × 37 = 1,924? Verify it.

**Answers:**
1. 1,728
2. 339
3. $810
4. 27 boxes, 0 left over (324 ÷ 12 = 27 exactly)
5. 52 × 37: 52 × 30 = 1,560 and 52 × 7 = 364. 1,560 + 364 = 1,924. ✓
