import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { Button, CardImg } from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";

import { BsTrash3 } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

import styles from "./ListCart.module.scss";

export function ListCart(props) {
  const { product } = props;
  const { loading, decreaseCart, incrementCart, deleteCart } = useCart();

  return (
    <div>
      <div className={styles.list}>
        <h4>Carrito</h4>
        {map(product, (item) => (
          <div key={item.codigo} className={styles.card}>
            <CardImg
              alt="Card image cap"
              src={BASE_NAME + item.images}
              className={styles.skeleton}
            />

            <div className={styles.detalle}>
              <p className={styles.name}>{item.name_extend}</p>

              <p className={styles.price}>Detal: $ {item.price1}</p>
              <p className={styles.price}>Mayor: $ {item.price2}</p>

              <div className={styles.btn}>
                <AiOutlineMinusCircle
                  onClick={() => decreaseCart(item.codigo)}
                  size={30}
                  color="grey"
                />
                <p>{item.quantity}</p>
                <AiFillPlusCircle
                  onClick={() => incrementCart(item.codigo)}
                  size={30}
                  color="green"
                />
              </div>

              <Button
                onClick={() => deleteCart(item.codigo)}
                className={styles.btnDelete}
              >
                <BsTrash3 size="15" color="red" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
