import Header from '../../components/header'
import blogStyles from '../../styles/article.module.scss'

export default function FirstPost() {
    return (
        <div>
            <Header></Header>
            <div className={blogStyles.article}>
                <div className={blogStyles.headlineContainer}>
                    <h1>
                        Companies waging battle on crops as food vs fuel
                    </h1>
                    <div className={blogStyles.summary}>
                    Food or fuel? Food companies are waging a battle in the fields, in laboratories and in the halls of government over how to use corn as demand for the grain and other food ingredients surges for use in ethanol and other biofuels.
                    </div>
                </div>
            </div>
        </div>
    )
    
    
  }