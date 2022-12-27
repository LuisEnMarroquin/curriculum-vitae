import { useTranslation } from "react-i18next"
import Card from "../components/Card"

function TextDemo() {
  const { t } = useTranslation()
  return (
    <Card>
      <section>
        <hr />
        <h1>Header 1</h1>
        <hr />
        <h2>Header 2</h2>
        <hr />
        <h3>Header 3</h3>
        <hr />
        <h4>Header 4</h4>
        <hr />
        <h5>Header 5</h5>
        <hr />
        <h6>Header 6</h6>
        <hr />
        <p>{t("paragraph")}</p>
        <hr />
      </section>
    </Card>
  )
}

export default TextDemo
