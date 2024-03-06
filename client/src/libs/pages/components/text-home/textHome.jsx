"use client"
import styles from './textHome.module.scss'

import { useState } from 'react'

export default function TextHome() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <h2 className={styles.title} onClick={open}>HANDGEMACHTE UNTERWÄSCHE</h2>
          {isOpen && <p className={styles.text}>Lace Culture - ein Dessous-Geschäft für Mädchen, die sich besonders und einzigartig fühlen möchten. Handgefertigte Dessous-Sets setzen einen lebhaften Akzent auf die Schönheit und innere Stärke jeder Frau. Denn wir alle sind einzigartig und unverwechselbar.  Um Ihre Individualität zu betonen, fertigen unsere Meister Unterwäsche unter Berücksichtigung Ihrer Wünsche und Ihrer Körperform an. Wir freuen uns, die kühnsten Fantasien unserer Kunden zu verwirklichen.  Auf der ständigen Suche nach perfekten Formen studieren wir moderne Designs, verwenden hochwertigste Stoffe und Accessoires, sowie zartes, leichtes Spitzenmaterial. All das verkörpert die Ästhetik von Lace Culture.  Unser Online-Shop für Unterwäsche begrüßt auch Männer. Unsere freundlichen Berater helfen Ihnen gerne dabei, das perfekte Geschenk für Ihre Freundin auszuwählen.</p>}
        </div>
        <p style={{position: "absolute", color: "transparent", fontSize: "1px"}} >Lace Culture - ein Dessous-Geschäft für Mädchen, die sich besonders und einzigartig fühlen möchten. Handgefertigte Dessous-Sets setzen einen lebhaften Akzent auf die Schönheit und innere Stärke jeder Frau. Denn wir alle sind einzigartig und unverwechselbar.  Um Ihre Individualität zu betonen, fertigen unsere Meister Unterwäsche unter Berücksichtigung Ihrer Wünsche und Ihrer Körperform an. Wir freuen uns, die kühnsten Fantasien unserer Kunden zu verwirklichen.  Auf der ständigen Suche nach perfekten Formen studieren wir moderne Designs, verwenden hochwertigste Stoffe und Accessoires, sowie zartes, leichtes Spitzenmaterial. All das verkörpert die Ästhetik von Lace Culture.  Unser Online-Shop für Unterwäsche begrüßt auch Männer. Unsere freundlichen Berater helfen Ihnen gerne dabei, das perfekte Geschenk für Ihre Freundin auszuwählen.</p>
      </div>
    </section>
  )
}