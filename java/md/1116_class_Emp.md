# ๐ class

1. ์ ์ฌํ ํน์ง์ ๋ฌถ์ด ๋์ ์งํฉ์ฒด
2. ํ๋๋ณ์์ ๋ฉ์๋๋ก ๊ตฌ์ฑ
3. ๊ฐ์ฒด๋ฅผ ์์ฑํ๊ธฐ ์ํ ํ
4. ๊ฐ์ฒด์งํฅ์ธ์ด์๋ง ์๋ ์ฉ์ด

<br>

# ๐ ์ค๋ฒ๋ก๋ฉ & ์ค๋ฒ๋ผ์ด๋ฉ

## ์ค๋ฒ๋ก๋ฉ

- ๋ฉ์๋์ด๋ฆ์ ๊ฐ์ผ๋ ๋งค๊ฐ๋ณ์ ๋ค๋ฅด๊ฒ ํน์ ๋ฆฌํดํ์ ๋ค๋ฅด๊ฒ

## ์ค๋ฒ๋ผ์ด๋ฉ

- ๋ถ๋ชจํด๋์ค ๋ฉ์๋๋ฅผ ์ฌ์ ์

<br>
<br>

### ๋ฌธ์ 1) arrayList์ ์์ฑ ํ sawon1 ~ sawon10 addํ๊ธฐ!

### ๋ฌธ์ 2) ์ง์ ์ด ๊ธ์ฌ ๊ตฌํ๊ธฐ

### ๋ฌธ์ 3) ์ง์ ํ๊ท  ๊ธ์ฌ ๊ตฌํ๊ธฐ

### ๋ฌธ์ 4) ์ง์์ด MANAGER๊ณ  ๊ธ์ฌ๊ฐ 2500์ด์๋ฐ๋ ์ฌ์ ์ ๊ตฌํ๊ธฐ

### ๋ฌธ์ 5) ๊ฐ์ฅ ๊ธ์ฌ๋ฅผ ๋ง์ด ๋ฐ๋ ์ฌ์์ ์ด๋ฆ๊ณผ ์ง์ ์กฐํํ๊ธฐ

```java
package ์๋ฐ1115;

public class Emp {

	String ename; // ์ฌ์์ด๋ฆ
	int sal; // ๊ธ์ฌ
	String job; // ์ง์

	// ํ๋๋ณ์๋ฅผ ์ด๊ธฐํํ  ์ ์๋ ์์ฑ์ ์์ฑํ๊ธฐ
	public Emp(String ename, int sal, String job) {
		this.ename = ename;
		this.sal = sal;
		this.job = job;
	}
}
```

```java
package ์๋ฐ1115;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Home {

	public static void main(String[] args) {

        Emp sawon1 = new Emp("SMITH",160,"CLERK");
		Emp sawon2 = new Emp("ALLEN",1600,"SALESMAN");
		Emp sawon3 = new Emp("WARD",1250,"SALESMAN");
		Emp sawon4 = new Emp("JONES",2975,"MANAGER");
		Emp sawon5 = new Emp("MARTIN",1250,"SALESMAN");
		Emp sawon6 = new Emp("BLAKE",2850,"MANAGER");
		Emp sawon7 = new Emp("CLARK",2450,"MANAGER");
		Emp sawon8 = new Emp("SCOTT",3000,"ANALYST");
		Emp sawon9 = new Emp("KING",5000,"PRESIDENT");
		Emp sawon10 = new Emp("TURNER",1500,"SALESMAN");

		//๋ฌธ์ 1. arrayList์ ์์ฑ ํ sawon1 ~ sawon10 addํ๊ธฐ!
		List<Emp> elist = new ArrayList<Emp>();
		elist.add(sawon1);
		elist.add(sawon2);
		elist.add(sawon3);
		elist.add(sawon4);
		elist.add(sawon5);
		elist.add(sawon6);
		elist.add(sawon7);
		elist.add(sawon8);
		elist.add(sawon9);
		elist.add(sawon10);

		int sum = 0;
		int avg = 0;
		int count = 0;
		int max = 0;
		int sawon = elist.size();
		String name = "";
		String job = "";

		for(Emp list : elist) {
			//๋ฌธ์ 2. ์ง์ ์ด ๊ธ์ฌ ๊ตฌํ๊ธฐ
			sum += list.sal;

			//๋ฌธ์ 3. ์ง์ ํ๊ท  ๊ธ์ฌ ๊ตฌํ๊ธฐ
			avg = sum/sawon;

			//๋ฌธ์ 4. ์ง์์ด MANAGER๊ณ  ๊ธ์ฌ๊ฐ 2500์ด์๋ฐ๋ ์ฌ์ ์ ๊ตฌํ๊ธฐ
			if(list.job.equals("MANAGER") && list.sal >= 2500)
				count++;

			//๋ฌธ์ 5. ๊ฐ์ฅ ๊ธ์ฌ๋ฅผ ๋ง์ด ๋ฐ๋ ์ฌ์์ ์ด๋ฆ๊ณผ ์ง์ ์กฐํํ๊ธฐ
			if(list.sal > max) {
				max = list.sal;
				name = list.ename;
				job = list.job;
			}
		}
        // ์ถ๋ ฅํ๊ธฐ
		System.out.println("์ง์ ์ด ๊ธ์ฌ : "+sum);
		System.out.println("์ง์ ํ๊ท  ๊ธ์ฌ : "+avg);
		System.out.println("์ฌ์ ์ : "+count);
		System.out.println("๊ฐ์ฅ ๊ธ์ฌ๋ฅผ ๋ง์ด ๋ฐ๋ ์ฌ์ ์ด๋ฆ : "+name+", ์ง์ : "+job);
	}

}
```
