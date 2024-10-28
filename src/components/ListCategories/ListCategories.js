import { CardImg, CardTitle } from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";

import styles from "./ListCategories.module.scss";
import Link from "next/link";

export function ListCategories(props) {
  const { categories } = props;
  const scale = "c_scale,f_auto,q_auto,w_200/";
  const upload = 'image/upload/';

  return (
    <div>      
      <div className={styles.content}>
      <h4>CATEGORÍAS</h4>
        <div className={styles.list}>
          {map(categories, (category) => (
            <div key={category.id} className={styles.card}>
              <Link href={`/products/${category.slug}`}>
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + upload +
                    scale + category.image.split(upload)[1]}
                  className={styles.skeleton}
                />

                <div className={styles.category}>
                  <CardTitle className={styles.title}>               
                    <h2>{category.name}</h2>
                    <h6>ver más</h6>
                  </CardTitle>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}