import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topBarComponent}>
      <div className={styles.topBar}>
        <Link href="/">
          <CardImg src="/image/MELADITOS.jpg" alt="Meladitos" />{" "}
        </Link>

        <div className={styles.title}>
          <p className={styles.text}>ALMACÉN Y DISTRIBUIDORA</p>
          <p className={styles.name}>LOS MELADITOS</p>
          <p className={styles.extra}>EL DE LOS PRECIOS BAJITOS</p>
        </div>
      </div>
     
    </div>
  );
}
