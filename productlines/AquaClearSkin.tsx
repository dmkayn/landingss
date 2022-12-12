import ProductCard from "../../components/ProductCard";
import ProductGrid from "../../components/ProductGrid";
import ProductLinePageTitle from "../../components/ProductLinePageTitle";
import ProductLinePoster from "../../components/ProductLinePoster";
import Divider from "../../components/ui/Divider";
import WaveDivider from "../../components/ui/WaveDivider";
import styles from "./AquaClearSkin.module.css";

interface Props { }

const AquaClearSkin: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <ProductLinePageTitle title="Aqua Clear Skin" />
      <ProductLinePoster
        imgSrc="/assets/images/productlines/aquaclearskin/aquaposter.jpg"
        imgAlt="AquaClearSkin"
      />
      <Divider />
      <div className={styles.container}>
        <div className={styles.title}>
          BEAUTY-BOOSTER
          <br />
          РУЧНАЯ РАБОТА!
        </div>
        <WaveDivider />
        <div className={styles.descriptionContainer}>
          <img
            className={styles.filler}
            src="/assets/images/productlines/aquaclearskin/aqua_filler.png"
            alt="filler"
          />
          <div className={styles.description}>
            Коллекция средств по уходу за жирной и смешанной кожей с инновационной комбинации
            ингредиентов предлагает целенаправленное, эффективное и деликатное решение для
            борьбы с загрязнениями и раздражениями кожи. Для чистого и свежего цвета лица – в
            любом возрасте.
          </div>
        </div>
        <WaveDivider />
        <ProductGrid>
          <ProductCard
            title="МАТИРУЮЩИЙ КРЕМ ДЛЯ 24-х ЧАСОВОГО УХОДА"
            description="Матирующий крем 24-х часового ухода с оксидом цинка, экстрактом мальвой и
            термальной водой поглощает излишнее кожное сало, защищает кожу от загрязнений и
            одновременно обеспечивает увлажнение. Уменьшаются мелкие сухие линии и морщины,
            очищаются поры и предотвращаются воспалительные процессы."
            imgSrc="/assets/images/productlines/aquaclearskin/aqua2.png"
          />
          <ProductCard
            title="МАСКА ГЛУБОКОГО ОЧИЩЕНИЯ"
            description="Очищающая маска с оксидом цинка, корнем солодки и термальной водой абсорбирует
            избыточный сальный секрет, нормализует выработку кожного сала, не пересушивая кожу
            восстанавливает рН баланс. Предотвращает загрязнения, уменьшает раздражения и
            покраснения, очищает поры. Действует как своеобразная промокательная бумага для
            жирной кожи, впитывает излишки кожного сала и обладает матирующим эффектом."
            imgSrc="/assets/images/productlines/aquaclearskin/aqua1.png"
          />
          <ProductCard
            title="СТИК ПРОТИВОВОСПАЛИТЕЛЬНЫЙ АНТИ-АКНЕ"
            description="Глубоко проникает в кожу, воздействуя на воспаление. Подсушивает и устраняет
            воспалительные элементы.
            ХЛОРГЕКСИДИН ДИГЛЮКОНАТ - оказывает бактериостатическое действие, экстракт
            ромашки - успокаивающий и противовоспалительный эффект,
            ПИРОКТОНОЛАМИН нормализует состояние клеток эпидермиса"
            imgSrc="/assets/images/productlines/aquaclearskin/aqua3.png"
          />
        </ProductGrid>
      </div>
    </>
  );
};

export default AquaClearSkin;