import ProductCard from "../../components/ProductCard";
import ProductGrid from "../../components/ProductGrid";
import ProductLinePageTitle from "../../components/ProductLinePageTitle";
import ProductLinePoster from "../../components/ProductLinePoster";
import Divider from "../../components/ui/Divider";
import WaveDivider from "../../components/ui/WaveDivider";
import styles from "./SheetMasks.module.css";

interface Props { }

const SheetMasks: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <ProductLinePageTitle title="Sheet Masks" />
      <ProductLinePoster
        imgSrc="/assets/images/productlines/sheetmasks/SheetMasksposter.jpg"
        imgAlt="SheetMasks"
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
            src="/assets/images/productlines/sheetmasks/masks_filler.png"
            alt="filler"
          />
          <div className={styles.description}>
            Антивозрастная маска со стволовыми клетками арганы и мыльнянки, гиалуроновой
            кислоты, комплексом пептидов,экстрактом планктона, эктсрактом овса! Моментально
            увлажняет, идеально подтягивает, дает пролонгированный результат. Абсолютный
            суперхит и настоящее немецкое качество! Высокая концентрация активных ингредиентов,
            минимум времени, максимум результат. Нежная основа из натуральной целлюлозы
            идеально прилегает к коже лица. АНТИВОЗРАСТНОЙ КОМПЛЕКС ПЕПТИДОВ
            улучшает эластичность и упругость кожи и считаются настоящим супер- средством против
            морщин. ЭКСТРАКТ РАСТИТЕЛЬНЫХ СТВОЛОВЫХ КЛЕТОК – комплекс экстрактов
            растительных стволовых клеток укрепляет и подтягивает зрелую кожу. ПЛАНКТОН
            стимулирует синтез гиалуроновой кислоты способствует обновлению клеток.
          </div>
        </div>
        <WaveDivider />
        <ProductGrid>
          <ProductCard
            title="МАСКА-ЛИФТИНГ ЧЕРНЫЙ МАГНИТ"
            description="Абсолютный суперхит и настоящее немецкое качество! Маска для глубокого очищения и
            моментального увлажняющего эффекта. Экстракт магнолии и салициловая кислота в
            сочетании с древесным углем мягко очищают кожу от избытков кожного сала и
            загрязнений. При регулярном применении маска предотвращает появление черных
            точек и воспалений на коже, очищая и сужая поры."
            imgSrc="/assets/images/productlines/sheetmasks/mask1.png"
          />
          <ProductCard
            title="МАСКА-ЛИФТИНГ СУПЕРУВЛАЖНЕНИЕ"
            description="Суперувлажняющая маска с 2-мя видами гиалуроновой кислоты - гиалурновая кислота и
            супергиалуроновая кислота! Со стволовыми клетками арганы, экстрактом икры,
            комплексом пептидов. Моментально увлажняет, идеально подтягивает, дает
            пролонгированный результат. Абсолютный суперхит и настоящее немецкое качество!
            Высокая концентрация активных ингредиентов, Минимум времени, максимум результата.
            Нежная основа из натуральной целлюлозы идеально прилегает к коже лица."
            imgSrc="/assets/images/productlines/sheetmasks/mask2.png"
          />
          <ProductCard
            title="МАСКА-ЛИФТИНГ АНТИВОЗРАСТНАЯ"
            description="Антивозрастная маска со стволовыми клетками арганы и мыльнянки, гиалуроновой
            кислоты, комплексом пептидов,экстрактом планктона, эктсрактом овса! Моментально
            увлажняет, идеально подтягивает, дает пролонгированный результат. Абсолютный
            суперхит и настоящее немецкое качество! Высокая концентрация активных ингредиентов,
            минимум времени, максимум результат. Нежная основа из натуральной целлюлозы
            идеально прилегает к коже лица. АНТИВОЗРАСТНОЙ КОМПЛЕКС ПЕПТИДОВ
            улучшает эластичность и упругость кожи и считаются настоящим супер- средством против
            морщин. ЭКСТРАКТ РАСТИТЕЛЬНЫХ СТВОЛОВЫХ КЛЕТОК – комплекс экстрактов
            растительных стволовых клеток укрепляет и подтягивает зрелую кожу. ПЛАНКТОН
            стимулирует синтез гиалуроновой кислоты способствует обновлению клеток."
            imgSrc="/assets/images/productlines/sheetmasks/mask3.png"
          />
        </ProductGrid>
      </div>
    </>
  );
};

export default SheetMasks;