import styles from "./price.module.scss";
import Card from "@/libs/components/card/card";

export default function Price({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Card data={data} />
      </div>
    </section>
  );
}
