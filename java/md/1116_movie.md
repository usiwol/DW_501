## π BufferedReader - κΈ°λ³Έμμ±μ λ©μλκ° μμ, λ§€κ°λ³μμλ μμ±μλ§ μ‘΄μ¬ν¨

```java
package movie;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

public class movie_main {

	public static void main(String[] args) {

		List<movieVo> list = new ArrayList<>();

		String path = "c:/test/movie.txt";
		// μλ λ«μμ£ΌκΈ° κΈ°λ₯
		try( BufferedReader file = new BufferedReader(new FileReader(path)) ) {
			while(true) {
				String line = file.readLine();
				// μμΈ μ²λ¦¬
				if(line==null) break;
				String[] temp = line.split(" ");
				movieVo data = new movieVo(temp[0], Integer.parseInt(temp[1]), Integer.parseInt(temp[2]));
				list.add(data);
				// System.out.println(line);
			}
			// file.close(); // λ«μμ£ΌκΈ°

		}catch(Exception e){
			System.out.println("νμΌ μλ€");
		}

		for(movieVo data : list)
			System.out.println( data.toString() );

        // new movieVo(); // μλ‘μ΄ κ³΅κ°μ λ§λ€κ³  μμ±μλ©μλλ‘ μ΄κΈ°ν
		// movieVo m = new movieVo();

```

### λ¬Έμ ) μν μ΄ 4κ° μλ ₯νμ¬ μΆλ ₯κΉμ§

```java
    // λ΅μ
    movieVo[] arr = new movieVo[4];
    arr[0] = new movieVo("νμ°",2022,15);
    arr[1] = new movieVo("νμ°",2022,15);
    arr[2] = new movieVo("νμ°",2022,15);
    arr[3] = new movieVo("νμ°",2022,15);

    for(movieVo data : arr)
    data.out();
    // μ¬κΈ°κΉμ§

    // λμ (μ€)λ΅
    list.add(new movieVo());
    list.get(0).title = "λͺλ";
    list.get(0).year = "2014λ";
    list.get(0).age = "15μΈ κ΄λκ°";

    System.out.println("μ λͺ© : "+list.get().title+" , κ°λ΄λλ : "+list.get().year+" , κ΄λλ±κΈ : "+list.get().age);

    Scanner sc = new Scanner(System.in);

    for(int i=0; i<arr.length; i++) {
    	arr[i] = new movieVo();
    	System.out.println("μνμ λͺ© : ");
    	arr[i].title = sc.nextLine();
    	System.out.println("κ°λ΄λλ : ");
    	arr[i].year = sc.nextLine();
    	System.out.println("κ΄λλ±κΈ : ");
    	arr[i].age = sc.nextLine();
    }

    for(movieVo temp : arr)
    	temp.output();
    }
}

```

## πtoString

```
- toString λ©μλλ μλ°μμ μΌλ°μ μΈ μΆλ ₯μ© λ©μλμ΄λ€.
```

<br>

### λ¬Έμ ) μνμ λͺ©, κ°λ΄λλ, κ΄λλ±κΈ μμ±μ λ©μλλ₯Ό ν΅ν΄ λ°μ΄ν° μ μ₯κ°λ₯νκ² λ§λ€κΈ°. μΆλ ₯ λ©μλ (μ λͺ©, λλ, λ±κΈ μΆλ ₯λμ΄μΌ ν¨)

```java
package movie;

    public class movieVo {
        private String title; // μνμ λͺ©
        private int year; // κ°λ΄λλ
        private int age; // κ΄λλ±κΈ
        // κΈ°λ³Έμ μΈ μμ±μ λ©μλκ° μ‘΄μ¬ν¨
        // void movieVo() {}
        public movieVo() {} // μμ±μ λ©μλ
        public movieVo(String title, int year, int age) {
            this.title = title;
            this.year = year;
            this.age = age;
        }

        // toString λ©μλλ μλ°μμ μΌλ°μ μΈ μΆλ ₯μ© λ©μλμ΄λ€.
        @Override
        public String toString() {
        return "μ λͺ© : "+title+" , κ°λ΄λλ : "+year+" , κ΄λλ±κΈ : "+age+"μΈμ΄μ";
        }

        // getter, setter
        public String getTitle() {
        return title;
        }
        public void setTitle(String title) {
        this.title = title;
        }
        public int getYear() {
        return year;
        }
        public void setYear(int year) {
        this.year = year;
        }
        public int getAge() {
        return age;
        }
        public void setAge(int age) {
        this.age = age;
        }
        public void out() {
        System.out.println("μ λͺ© : "+title+" , κ°λ΄λλ : "+year+" , κ΄λλ±κΈ : "+age+"μΈμ΄μ");
        }
    }
```
