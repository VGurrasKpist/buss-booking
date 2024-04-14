import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Express buss
        </p>
        <div>
          
        </div>
      </div>

      <div className={styles.center}>
        <div>
          <form className={styles.Formbacground}> 
          <div className={styles.ipnutGroup}>
        <input className={styles.inputText}
          type="text"
          placeholder= "From"
          
          required
          
        />
        <button type="button" className={styles.changebtn} >
        <Image
              src="/transfer.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={25}
              height={25}
              
          />
         </button>

        <input className={styles.inputText}
          type="text"
          placeholder="To"
          
          required
        />
        
      </div>
      <div className={styles.ipnutGroupDate}>
      <input className={styles.inputTime}
        type="date"
        
        required
      />
      <input className={styles.inputTime}
        type="time"
       
        required
      />
      
      <button type="submit" className={styles.submitBtn}>
        Search
      </button>
      </div>
          </form>
        </div>
      </div>
      <div className={styles.cardBacground}>

      <div className={styles.grid}>
        <a
         
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Traffic info  <span>-&gt;</span>
          </h2>
          <p>where is my buss and late arivels</p>
        </a>

        <a
          
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Learn more about us</p>
        </a>

        <a
          
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Customer support <span>-&gt;</span>
          </h2>
          <p>Got a question? We are here to help</p>
        </a>

        <a
         
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Compensation <span>-&gt;</span>
          </h2>
          <p>
            Is your buss late? Get compensation here
          </p>
        </a>
        <a
          
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            News <span>-&gt;</span>
          </h2>
          <p>Read the latest news about us</p>
        </a>
      </div>
      </div>
    </main>
  );
}
