import Header from '../../components/header'
import articleStyles from '../../styles/article.module.scss'
import Image from 'next/image'
import img1 from '../../images/blog1/corn.jpeg'

export default function FirstPost() {
    return (
        <div>
            <div className={articleStyles.heroImage}></div>
            <div className={articleStyles.article}>
                <div className={articleStyles.headlineContainer}>
                    <h1>
                        Companies waging battle on crops as food vs fuel
                    </h1>
                    <div className={articleStyles.summaryContainer}>
                        <div className={articleStyles.headImage}>
                            <Image src={img1}></Image>
                        </div>
                        <div className={articleStyles.content}>
                            Food or fuel? Food companies are waging a battle in the fields, in laboratories and in the halls of government over how to use corn as demand for the grain and other food ingredients surges for use in ethanol and other biofuels.
                        </div>
                        <div className={articleStyles.details}>
                            <div className={articleStyles.leftDetails}>
                                <div>
                                    By Brad Dorfman
                                </div>
                                <div>
                                    March 9, 2007
                                </div>
                            </div>
                            <div className={articleStyles.rightDetails}>
                                4 MIN READ
                            </div>
                        </div>
                    </div>
                </div>
                <div className={articleStyles.articleContent}>
                    <p>The demand for corn has driven up costs and cut into earnings, and executives at the Reuters Food Summit in Chicago this week said they do not expect corn prices to retreat from recent 10-year highs any time soon.</p>

                    <p>As the tug of war over how to use corn intensifies, food industry executives say economic fundamentals are shifting.</p>

                    <p>"We really do look at it right now as a systemic change," said Jeff Ettinger, chairman and chief executive officer of Hormel Foods Corp. HRL.N</p>

                    <p>In the court of public opinion and at legislatures in Washington and Europe, the companies are pushing the debate over whether crops now used for food should be diverted toward fuel, and whether government should use tax dollars to subsidize the shift.</p>

                    <p>"There is definitely going to be a public debate, in my mind, over corn for food versus corn for fuel," said Richard Bond, chief executive of meat processor Tyson Foods Inc. TSN.N</p>

                    <p>In Washington, that debate could take place later this year, when Congress debates the five-year farm policy bill, which sets subsidies on crops like corn, wheat and soybeans.</p>

                    <p>“From a farm policy and a farm bill this year, we need to make sure that there is enough corn for food,” Bond said. Tyson buys corn to feed livestock.</p>

                    <div className={articleStyles.heading2}>
                        <h2>FAT TO FUEL</h2>
                    </div>

                    <p>Tyson, which expects rising corn prices to increase its costs by $330 million this year, is also looking to develop biofuel, which would be made from some of the 2.3 billion pounds of animal fat it produces each year.</p>

                    <p>Bond said fuel from fat will be more useful than ethanol, and that production could start some time this year.</p>

                    <p>President Bush has called for using 35 million gallons of renewable fuels by 2017 in an effort to reduce gasoline consumption by 20 percent.</p>

                    <p>In Europe and elsewhere, governments are pushing industry to develop biofuels -- mainly produced from grains, sugar and vegetables -- as a way to stem global warming.</p>

                    <p>Anglo-Dutch foodmaker Unilever NV UNc.ASULVR.L advocates spending government money on "second generation" biofuels that could be made from waste products, grass and other items not used in food.</p>

                    <p>Unilever wants to use edible oils for fuel, according to Alan Jope, global foods vice president.</p>

                    <p>“We are quite active to make sure that legislation that’s put in place around biofuels takes a responsible approach,” Jope said.</p>

                    <p>Food companies are also working in the lab to find substitute ingredients for corn and other grains.</p>

                    <p>H.J. Heinz Co. HNZ.N Chairman and Chief Executive William Johnson said a new natural sweetener will likely be developed in the next few years to replace high fructose corn syrup and sugar, the two sweeteners used in its ketchup.</p>

                    <p>Developing seeds that produce higher crop yields and planting field that are currently dormant in the United States could also ease supply constraints, Hormel's Ettinger said.</p>

                    <p>Meanwhile, food companies have passed on rising corn and other costs to consumers by raising prices.</p>

                    <p>But those increases, put into place in the past 18 months, came after a long period of few, if any, price hikes.</p>

                    <p>“Food prices in the United States are still incredibly low compared with most other countries in the world,” Ettinger said.</p>
                </div>
            </div>
        </div>
    )
    
    
  }