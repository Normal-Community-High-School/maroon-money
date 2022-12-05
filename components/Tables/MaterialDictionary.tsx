import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'Term', headerName: 'Term', width: 70 },
  { field: 'Definition', headerName: 'Definition', width: 130 },
];

const rows = [
    {
      "Term": "529 plan",
      "Definition": "A tax-advantaged savings plan designed to help families save money for future educational costs. There are two types of 529 plans: 529 prepaid tuition plans and 529 savings plans."
    },
    {
      "Term": "529 prepaid tuition plan",
      "Definition": "A type of 529 plan that allows families to pay tuition ahead of time for specific colleges or college systems at today’s tuition rates."
    },
    {
      "Term": "529 savings plan",
      "Definition": "A type of 529 plan that allows you to invest your education savings in various types of investments, including mutual funds. Like a 401(k) or IRA retirement plan, your account could go up or down depending on market performance. This plan, also called an education savings plan, is typically sponsored by a state and may be available from a private investment firm. You also can use this plan to help pay tuition at public, private, or religious schools from kindergarten through 12th grade."
    },
    {
      "Term": "Advertisement",
      "Definition": "Posters, signs, television commercials, radio spots, and other media that businesses use to promote products or services."
    },
    {
      "Term": "Annual return",
      "Definition": "The profit or loss on an investment over a one-year period."
    },
    {
      "Term": "APR (Annual Percentage Rate)",
      "Definition": "The cost of borrowing money on a yearly basis, expressed as a percentage rate."
    },
    {
      "Term": "Asset",
      "Definition": "An item with economic value, such as stock or real estate."
    },
    {
      "Term": "Associate's degree",
      "Definition": "A degree usually awarded for at least two years of full-time academic study beyond high school."
    },
    {
      "Term": "ATM",
      "Definition": "Stands for 'automated teller machine,' a machine that lets bank customers perform basic transactions, such as deposits and withdrawals."
    },
    {
      "Term": "ATM balance inquiry fee",
      "Definition": "A fee you may be charged if you check your prepaid card balance at an ATM or if you call customer service to ask about your balance."
    },
    {
      "Term": "Automatic or direct debit",
      "Definition": "A bill-paying method you set up with the merchant or service provider. You provide the merchant or service provider (for example, your cell phone provider or utility company) with your checking account information and they take the funds from your account each time the bill is due (for example, every month)."
    },
    {
      "Term": "Bachelor's degree",
      "Definition": "A degree usually awarded for at least four years of full-time academic study beyond high school."
    },
    {
      "Term": "Bank",
      "Definition": "A financial institution and business that accepts deposits, makes loans, and handles other financial transactions."
    },
    {
      "Term": "Benefit",
      "Definition": "Something that an employer, the government, or an insurance company provides that’s often used only for a particular purpose, such as food or medical costs. Also: An advantage; something that is good."
    },
    {
      "Term": "Bill-payment service",
      "Definition": "A service in which you allow a business to use your cash, your bank or credit union account, a prepaid card, or another payment method to pay your utility, mortgage, or other bills in person, by phone, through a website, or through a mobile phone application."
    },
    {
      "Term": "Bloom's Taxonomy",
      "Definition": "Named for educational psychologist Dr. Benjamin Bloom who, in 1956, led the creation of a framework for classifying educational goals and promoting higher order thinking skills when designing learning activities. His taxonomy allows educators to categorize activities by their level of challenge and complexity. It was revised in 2011 by a group of practitioners and researchers to promote a more dynamic conception of classification."
    },
    {
      "Term": "Bimonthly (semi-monthly)",
      "Definition": "Twice a month."
    },
    {
      "Term": "Bond",
      "Definition": "A type of debt, similar to an IOU. When you buy a bond, you’re lending to the issuer, which may be a government, municipality, or corporation. The issuer promises to pay you a specified rate of interest during the life of the bond and to repay the principal — also known as the bond’s face value or par value — when the bond matures, or comes due after a set period."
    },
    {
      "Term": "Borrow",
      "Definition": "To receive something on loan with the understanding that you will return it."
    },
    {
      "Term": "Borrower",
      "Definition": "A person or organization that borrows something, especially money from a bank or other financial institution."
    },
    {
      "Term": "Budget",
      "Definition": "A plan that outlines what money you expect to earn or receive (your income) and how you will save it or spend it (your expenses) for a given period of time; also called a spending plan."
    },
    {
      "Term": "Business",
      "Definition": "The activity of making, buying, or selling goods or providing services in exchange for money."
    },
    {
      "Term": "Business income",
      "Definition": "The money a business receives for selling its goods and services is its income."
    },
    {
      "Term": "Buy",
      "Definition": "To get something by paying money for it."
    },
    {
      "Term": "Buying plan",
      "Definition": "A plan people use to identify and consider factors like cost, features, and choices as they prepare to make a purchase."
    },
    {
      "Term": "Buying power",
      "Definition": "Also called purchasing power, it is the amount of goods and services that can be purchased by a given unit of currency, taking into account the effect of inflation."
    },
    {
      "Term": "Capital gain",
      "Definition": "The profit that comes from selling an investment for more than you paid for it."
    },
    {
      "Term": "Capital loss",
      "Definition": "The loss that comes from selling an investment for less than you paid for it."
    },
    {
      "Term": "Card replacement fee",
      "Definition": "A fee your prepaid card provider may charge to replace your card if it is lost, stolen, or damaged."
    },
    {
      "Term": "Career",
      "Definition": "A profession that may span your lifetime and includes your education, training, professional memberships, volunteering, and full history of paid work. Can be a synonym for occupation."
    },
    {
      "Term": "Cash",
      "Definition": "Paper or coin money."
    },
    {
      "Term": "Certificate of deposit (CD)",
      "Definition": "Savings tool with fixed maturity date and fixed interest rate."
    },
    {
      "Term": "Checking account",
      "Definition": "An account at a bank (sometimes called a share draft account at a credit union) that allows you to make deposits, pay bills, and make withdrawals."
    },
    {
      "Term": "Claim",
      "Definition": "The insured’s request for payment due to loss incurred and covered under the policy agreement."
    },
    {
      "Term": "Closed-loop prepaid card",
      "Definition": "This type of card can only be used at certain locations. For example, a closed-loop card might be good only at a specific store or group of stores or on your public transportation system."
    },
    {
      "Term": "Coin",
      "Definition": "A small metal disc that we use as money."
    },
    {
      "Term": "Coinsurance",
      "Definition": "Coinsurance in insurance, is the splitting or spreading of risk among multiple parties. In the U.S. insurance market, coinsurance is the joint assumption of risk between the insurer and the insured. In health insurance, coinsurance is sometimes used synonymously with copayment, but copayment is really fixed while coinsurance is a percentage that the insurer pays after the insurance policy's deductible is exceeded up to the policy's stop loss."
    },
    {
      "Term": "Collateral",
      "Definition": "An asset that secures a loan or other debt that a lender can take if you don't repay the money you borrow. For example, if you get a home loan, the bank's collateral is typically your house."
    },
    {
      "Term": "Commission",
      "Definition": "An amount of money someone earns for selling something."
    },
    {
      "Term": "Comparison shopping",
      "Definition": "The practice of comparing prices, features, benefits, risks, and other characteristics of two or more similar products or services."
    },
    {
      "Term": "Compound interest",
      "Definition": "When you earn interest on both the money you save and the interest you earn."
    },
    {
      "Term": "Consumer",
      "Definition": "A person who buys or receives goods or services for personal needs or use and not for resale."
    },
    {
      "Term": "Consumer Price Index (CPI)",
      "Definition": "A measure of the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services. Indexes are available for the U.S. and various geographic areas."
    },
    {
      "Term": "Copayment (or copay)",
      "Definition": "A fixed amount ($20, for example) you pay for a covered health care service in addition to the amount your insurer pays."
    },
    {
      "Term": "Cosigner",
      "Definition": "An individual who signs a loan, credit account, or promissory note of another person as support for the credit of the primary signer and who becomes responsible for the debt obligation."
    },
    {
      "Term": "Cost",
      "Definition": "The amount of money that is needed to pay for or buy something."
    },
    {
      "Term": "Cost-effective",
      "Definition": "To have good value for the amount of money you paid."
    },
    {
      "Term": "Cost of attendance (COA)",
      "Definition": "The total amount it will cost you to go to school — usually stated as a yearly figure. COA includes tuition and fees; room and board (or a housing and food allowance); and allowances for books, supplies, transportation, loan fees, and dependent care if applicable. It also includes some miscellaneous and personal expenses."
    },
    {
      "Term": "Credit",
      "Definition": "Borrowing money, or having the right to borrow money, to buy something. Usually it means you’re using a credit card, but it might also mean that you got a loan."
    },
    {
      "Term": "Credit card",
      "Definition": "An open-ended loan that allows you to borrow money up to a certain limit and carry over an unpaid balance from month to month. There is no fixed time to repay the loan as long as you make the minimum payment due each month. You pay interest on any outstanding credit card loan balance."
    },
    {
      "Term": "Credit card statement",
      "Definition": "A summary of how you've used your credit card for a billing period."
    },
    {
      "Term": "Credit limit",
      "Definition": "A limit set by the credit card company on how much you can charge on the card it issued to you. You can use your credit card to make purchases up to your credit limit."
    },
    {
      "Term": "Credit score",
      "Definition": "Numbers created by mathematical formulas that use key pieces of your credit history to calculate your score at a moment in time."
    },
    {
      "Term": "Credit union",
      "Definition": "A cooperative financial institution that is chartered by the National Credit Union Administration (a federal independent agency) or a state government and is owned by its individual members."
    },
    {
      "Term": "Credit utilization ratio",
      "Definition": "The amount of credit a person has compared with the amount they've used."
    },
    {
      "Term": "Creditworthy",
      "Definition": "Financially sound enough to justify the extension of credit."
    },
    {
      "Term": "Cryptocurrency",
      "Definition": "Also called “crypto,” it’s a popular type of virtual currency that uses cryptography, a mathematical encryption process, to enhance data protection and provide what’s called pseudonymity, in which individuals are identified by a public alphanumeric key or address. Bitcoin is one of the earliest and most well-known cryptocurrencies."
    },
    {
      "Term": "Data breach",
      "Definition": "The unauthorized movement or disclosure of sensitive information to a party, usually outside the organization, that is not authorized to have or see the information. Someone who gets the data might use it for identity theft."
    },
    {
      "Term": "Debit card",
      "Definition": "A plastic card used to make purchases at businesses (like grocery stores and gas stations) with money in your checking account."
    },
    {
      "Term": "Debt",
      "Definition": "Money you owe another person or a business."
    },
    {
      "Term": "Debt consolidation",
      "Definition": "Consolidation means that your various debts, whether they are credit card bills or loan payments, are rolled into a new loan with one monthly payment. If you have multiple credit card accounts or loans, consolidation may be a way to simplify or lower payments. But a debt consolidation loan does not erase your debt. You might also end up paying more by consolidating debt into another type of loan."
    },
    {
      "Term": "Deductible",
      "Definition": "The amount of expenses an insured must pay before the insurance company will contribute toward the covered item. For example, the amount you pay for covered health care services before your insurance plan starts to pay is your deductible."
    },
    {
      "Term": "Demand",
      "Definition": "A measure of how popular or necessary an item is and how many consumers want to buy it."
    },
    {
      "Term": "Depository institution",
      "Definition": "A financial institution such as a bank or credit union that is authorized to accept checking or savings deposits."
    },
    {
      "Term": "Direct deposit",
      "Definition": "Money electronically sent to your bank account, credit union account, or prepaid card."
    },
    {
      "Term": "Dividend",
      "Definition": "A portion of a company's profit paid to shareholders."
    },
    {
      "Term": "Doctoral degree",
      "Definition": "A degree usually awarded for at least three years of full-time academic work beyond a bachelor’s degree."
    },
    {
      "Term": "Donate",
      "Definition": "To give something (like money, food, or clothes) to help a person or organization."
    },
    {
      "Term": "Earn",
      "Definition": "To receive money in exchange for goods or services."
    },
    {
      "Term": "Earned income",
      "Definition": "Money made from working for someone who pays you or from running a business or farm. This includes all the income, wages, and tips you get from working."
    },
    {
      "Term": "Elder financial exploitation",
      "Definition": "The illegal or improper use of an older adult’s funds, property, or assets by family members, caregivers, friends, or strangers who gain their trust."
    },
    {
      "Term": "Emergency fund",
      "Definition": "A cash reserve that's specifically set aside for unplanned expenses or financial emergencies. Some common examples include car repairs, home repairs, medical bills, or a loss of income."
    },
    {
      "Term": "Entrepreneur",
      "Definition": "Someone who organizes, manages, and assumes the risks of a business or enterprise."
    },
    {
      "Term": "Estate tax",
      "Definition": "A tax on the value of property you own at your death. It considers everything you own or have certain interests in at the date of death. There is a federal estate tax, and some states have their own estate taxes."
    },
    {
      "Term": "Exchange rate",
      "Definition": "A number that is used to compare the value of money in two different countries. For example, you would use an exchange rate to figure out how many pesos or euros you could get for one U.S. dollar."
    },
    {
      "Term": "Expected family contribution",
      "Definition": "The index number schools use to determine your eligibility for federal financial aid. This number results from the financial information you provide in your Free Application for Federal Student Aid (FAFSA) form. Your EFC index number is reported to you on your Student Aid Report. It is not the amount of money your family will have to pay for college nor is it the amount of federal student aid you will receive. It is a number your school uses to calculate the amount of federal student aid you are eligible to receive."
    },
    {
      "Term": "FAFSA – Free Application for Federal Student Aid",
      "Definition": "The Free Application for Federal Student Aid form is used to determine how much a student and his or her family are eligible to receive in federal financial aid. The FAFSA may also be used to determine a student’s eligibility for state and school-based aid and also may influence how much private aid a student receives."
    },
    {
      "Term": "Federal income tax",
      "Definition": "The federal government collects taxes based on the earnings of individuals and businesses, called an income tax. The federal income tax pays for national programs such as defense, foreign affairs, law enforcement, and interest on the national debt."
    },
    {
      "Term": "Federal minimum wage",
      "Definition": "The lowest national wage as established by law in the Fair Labor Standards Act (FLSA)."
    },
    {
      "Term": "Federal student loans",
      "Definition": "These loans are funded by the federal government and have terms and conditions that are set by law. Federal loans also include benefits that private student loans don’t usually offer. These benefits could include lower interest rates, repayment plans based on income, and possible loan forgiveness for people who choose to work for a certain amount of time in government or for certain not-for-profit organizations or teach in a low-income school."
    },
    {
      "Term": "Federal Work-Study",
      "Definition": "A program that provides part-time jobs to help you earn money to pay for college expenses."
    },
    {
      "Term": "FICA – Federal Insurance Contributions Act",
      "Definition": "A tax deducted from your pay to contribute to Social Security and Medicare; your employer contributes the same amount on your behalf."
    },
    {
      "Term": "Financial aid",
      "Definition": "Money given in the form of grants, work-study, loans, and scholarships to help pay for post-secondary tuition and fees, as well as related expenses such as room and board, books, supplies, and transportation."
    },
    {
      "Term": "Financial capability",
      "Definition": "The ability to manage financial resources effectively, understand and apply financial knowledge, demonstrate healthy money habits, and successfully complete financial tasks as planned."
    },
    {
      "Term": "Financial emergencies",
      "Definition": "Expenses that come up unexpectedly, are very important, and need attention right away."
    },
    {
      "Term": "Financial well-being",
      "Definition": "The ability to meet all financial needs, today and over time; feel secure in the financial future; absorb a financial shock; and have the financial freedom to make choices to enjoy life."
    },
    {
      "Term": "Fixed expenses",
      "Definition": "Expenses, like bills, that must be paid each month and generally cost the same amount. Some fixed expenses, like a utility bill, may also be variable because the amount changes each month depending on usage."
    },
    {
      "Term": "Foreclosure relief scam",
      "Definition": "Scheme to take your money or your house often by making a false promise of saving you from foreclosure; includes mortgage loan modification scams."
    },
    {
      "Term": "Foreign transaction fee",
      "Definition": "A fee your card provider charges when you use your prepaid card in a foreign country or to pay in a foreign currency. This fee is usually a percentage of your purchase, withdrawal, or other transaction, rather than a flat fee. This fee is also called a currency conversion fee. Not all cards can be used outside the United States, so check your cardholder agreement before you travel."
    },
    {
      "Term": "Form W-4: Employee's Withholding Allowance Certificate",
      "Definition": "A form that the employee completes and the employer uses to determine the amount of income tax to withhold."
    },
    {
      "Term": "Fraud",
      "Definition": "An illegal act that occurs when people try to trick you out of your personal information and your money."
    },
    {
      "Term": "Gig",
      "Definition": "A single project or task for which a worker is hired to work on demand. Some gigs are a type of short-term job, and some workers pursue gigs as a self-employment option."
    },
    {
      "Term": "Gig economy",
      "Definition": "Generally, an informal term for situations where people are hired for single projects or tasks or for short-term jobs, often through a digital marketplace."
    },
    {
      "Term": "Goal",
      "Definition": "Something, such as an outcome, you wish to achieve or accomplish in a specific amount of time."
    },
    {
      "Term": "Goods",
      "Definition": "Objects people want that they can touch or hold, such as toys, clothes, and food."
    },
    {
      "Term": "Government benefits card",
      "Definition": "Prepaid cards used by a government agency to pay certain government benefits, such as unemployment insurance."
    },
    {
      "Term": "Grace period",
      "Definition": "The number of days you have to pay your bill in full before finance charges start. Without this period, you may have to pay interest from the date you use your card or when the purchase is posted to your account."
    },
    {
      "Term": "Grant",
      "Definition": "A type of financial aid that does not have to be repaid, unless, for example, you withdraw from school and you need to pay back some of the grant money; often need-based."
    },
    {
      "Term": "Gross income",
      "Definition": "Total pay before taxes and other deductions are taken out."
    },
    {
      "Term": "Homeowner's insurance",
      "Definition": "Covers a home's structure and the personal belongings inside in the event of loss or theft; helps pay for repairs and replacement."
    },
    {
      "Term": "Identity theft",
      "Definition": "Using your personal information — such as your name, Social Security number, or credit card number — without your permission."
    },
    {
      "Term": "Imposter scam",
      "Definition": "An attempt to get you to send money by pretending to be someone you know or trust, like a sheriff; local, state, or federal government employee; a family member; or charity organization."
    },
    {
      "Term": "Impulse purchase",
      "Definition": "Buying things without having planned for them beforehand. It can cause you to spend more money than you can afford."
    },
    {
      "Term": "Inactivity fee",
      "Definition": "A fee charged if you don’t use your card for a certain period of time. The length of time that triggers an inactivity fee varies. Not all prepaid cards charge inactivity fees."
    },
    {
      "Term": "Income",
      "Definition": "Money earned or received such as wages or salaries, tips, commissions, contracted pay, government transfer payments, dividends on investments, tax refunds, gifts, and inheritances."
    },
    {
      "Term": "Income tax",
      "Definition": "Federal, state, and local taxes on income, both earned (salaries, wages, tips, commissions) and unearned (interest, dividends). Includes both personal and business or corporate income taxes. Not all states and localities have income taxes."
    },
    {
      "Term": "Inflation",
      "Definition": "Inflation occurs when the prices of goods and services increase over time."
    },
    {
      "Term": "Insurance",
      "Definition": "The practice or arrangement in which a company or government agency provides a guarantee of compensation for specified loss, damage, illness, or death in return for payment of a premium."
    },
    {
      "Term": "Insured",
      "Definition": "The person, group, or organization whose life or property is covered by an insurance policy."
    },
    {
      "Term": "Insurer",
      "Definition": "A person or company offering insurance policies in return for premiums; person or organization that insures."
    },
    {
      "Term": "Interest",
      "Definition": "A fee charged by a lender, and paid by a borrower, for the use of money. A bank or credit union may also pay you interest if you deposit money in certain types of accounts."
    },
    {
      "Term": "Interest capitalization",
      "Definition": "Interest capitalization occurs when unpaid interest is added to the principal amount of your student loan. When the interest on your federal student loan is not paid as it accrues (during periods when you are responsible for paying the interest), your lender may capitalize the unpaid interest. This increases the outstanding principal amount due on the loan. Interest is then charged on that higher principal balance, increasing the amount of interest charged and the overall cost of the loan."
    },
    {
      "Term": "Interest rate",
      "Definition": "A percentage of a sum borrowed that is charged by a lender or merchant for letting you use its money. A bank or credit union may also pay you an interest rate if you deposit money in certain types of accounts."
    },
    {
      "Term": "Invest",
      "Definition": "To commit money to earn a financial return; the strategic purchase or sale of assets to produce income or capital gains."
    },
    {
      "Term": "Investment",
      "Definition": "Something you spend your money on that you expect will earn a financial return."
    },
    {
      "Term": "Irregular income",
      "Definition": "Inconsistent amounts of money you receive through work or investments; both the schedule and the amount may vary."
    },
    {
      "Term": "Job",
      "Definition": "A specific arrangement where you do tasks for an employer."
    },
    {
      "Term": "Lend",
      "Definition": "The act of giving something to someone with the understanding that they will give it back to you."
    },
    {
      "Term": "Lender",
      "Definition": "An organization or person that lends money with the expectation that it will be repaid, generally with interest."
    },
    {
      "Term": "Liability",
      "Definition": "Something that is a disadvantage, money owed, or a debt or obligation according to law."
    },
    {
      "Term": "Liquidity",
      "Definition": "A measure of the ability and ease with which you can access and use your money."
    },
    {
      "Term": "Loan",
      "Definition": "Money that needs to be repaid by the borrower, generally with interest."
    },
    {
      "Term": "Long-term goals",
      "Definition": "Goals that can take more than five years to achieve."
    },
    {
      "Term": "Mail fraud scam",
      "Definition": "Letters that look real but contain fake promises. A common warning sign is a letter asking you to send money or personal information now to receive something of value later."
    },
    {
      "Term": "Master's degree",
      "Definition": "A degree usually awarded for one or two years of full-time academic study beyond a bachelor’s degree."
    },
    {
      "Term": "Maturity date",
      "Definition": "The date that an investor’s investment is to be paid back in full in accordance with its agreement. A certificate of deposit (CD) contains a maturity date provision obligating the financial institution to repay an investor sums invested plus interest on a specified date."
    },
    {
      "Term": "Medicaid",
      "Definition": "The single largest source of health coverage in the United States; it is a joint federal and state program that, together with the Children’s Health Insurance Program, provides health coverage to low income Americans, including children, pregnant women, parents, seniors, and individuals with disabilities."
    },
    {
      "Term": "Medicare",
      "Definition": "A health insurance program for people who are 65 or older, certain younger people with disabilities, and people with permanent kidney failure requiring dialysis or a transplant; financed by deductions from wages and managed by the federal Social Security Administration."
    },
    {
      "Term": "Minimum payment",
      "Definition": "The minimum dollar amount that must be paid each month on a loan, line of credit, or other debt."
    },
    {
      "Term": "Minimum wage",
      "Definition": "A wage set by contract or by law as the lowest that may be paid to employees."
    },
    {
      "Term": "Mobile banking",
      "Definition": "A service that allows you to use your smartphone or tablet to manage your bank or credit union account without the aid of a teller. Generally, you can deposit checks into your account using this service, but not cash."
    },
    {
      "Term": "Money",
      "Definition": "You can use money to buy goods and services. Money looks different in different places around the world."
    },
    {
      "Term": "Money market deposit account",
      "Definition": "Federally insured account at a bank or credit union that offers a higher rate of interest than a savings account, allows for a limited number of transactions monthly, and may require a minimum deposit or minimum account balance."
    },
    {
      "Term": "Money order",
      "Definition": "A money order can be used instead of a check. You can buy a money order to pay a business or other party."
    },
    {
      "Term": "Moral hazard",
      "Definition": "The idea that you are less likely to be careful when you are shielded from the consequences of your actions."
    },
    {
      "Term": "Mortgage",
      "Definition": "Mortgage loans are used to buy a home or to borrow money against the value of a home you already own."
    },
    {
      "Term": "Mutual fund",
      "Definition": "A company that pools money from many investors and invests the money in securities such as stocks, bonds, and short-term debt. The combined holdings of the mutual fund are known as its portfolio. Investors buy shares in mutual funds. Each share represents an investor’s part ownership in the fund and the income it generates."
    },
    {
      "Term": "Needs",
      "Definition": "Basic things people must have to survive (such as food, clothing, and shelter), resources they need to do their jobs (such as reliable transportation and the tools of the trade), and resources to help build and protect their assets so they can meet future needs (such as emergency savings and insurance)."
    },
    {
      "Term": "Net income",
      "Definition": "Amount of money you bring home in your paycheck after taxes and other deductions are taken out; also called take-home pay."
    },
    {
      "Term": "Occupation",
      "Definition": "Describes a type of work with associated tasks, education and training, typical wages, work settings, and more. Can be a synonym for career."
    },
    {
      "Term": "Online banking",
      "Definition": "A service that allows you to use a secure website to manage your bank or credit union account without the aid of a teller. While you can transfer money between accounts using this service, you generally cannot deposit checks or cash."
    },
    {
      "Term": "Online or mobile bill payment",
      "Definition": "A bill-paying method you set up with your bank or credit union. You use online banking to give your bank the merchant or service provider’s information, and your bank makes the payment according to the amount and schedule you set up. Online bill paying may or may not also be offered on a bank’s or credit union’s mobile application."
    },
    {
      "Term": "Open-loop prepaid card",
      "Definition": "This type of card has a network logo on it. Examples of networks are Visa, MasterCard, American Express, and Discover. These cards can be used at any location that accepts that card type. Most prepaid cards are open-loop cards."
    },
    {
      "Term": "Opportunity cost",
      "Definition": "Cost of the next best use of your money or time when you choose to buy or do one thing rather than another."
    },
    {
      "Term": "Out-of-pocket cost",
      "Definition": "The expenses and losses that are not reimbursed by insurance. This cost includes deductibles, copayments, and amounts paid for services or repairs that are excluded from coverage. It’s the amount paid before insurance coverage kicks in."
    },
    {
      "Term": "Overdraft",
      "Definition": "An overdraft occurs when you don’t have enough money in your account to cover a transaction, but the bank pays the transaction anyway."
    },
    {
      "Term": "Paper check",
      "Definition": "A paper order to a bank or credit union to pay someone from a checking account."
    },
    {
      "Term": "Pay period",
      "Definition": "The amount of time that an employee works before being paid — for example, a week or a month."
    },
    {
      "Term": "Paycheck",
      "Definition": "A check for your salary or wages made out to you."
    },
    {
      "Term": "Payroll card",
      "Definition": "A type of prepaid card you get from your employer that you receive your paycheck on."
    },
    {
      "Term": "Payroll tax",
      "Definition": "Taxes taken from your paycheck, including Social Security and Medicare taxes."
    },
    {
      "Term": "Phishing scam",
      "Definition": "When someone tries to get you to give them personal information, such as through an email or text message, often by impersonating a business or government agency. This can be thought of as “fishing for confidential information”"
    },
    {
      "Term": "Policy",
      "Definition": "In the insurance context, it is a written contract between the insured and the insurer."
    },
    {
      "Term": "Policyholder",
      "Definition": "The individual or firm that acquires and wants protection from the risk and generally in whose name an insurance policy is written. The holder is not necessarily the insured. For instance, life insurance policies might be bought by employers of key employees, or a husband may buy and be the holder of a life insurance policy on his wife. In such cases, the buyer is the policyholder."
    },
    {
      "Term": "Post-secondary education",
      "Definition": "Includes all forms of schooling after high school, not just college."
    },
    {
      "Term": "Post-secondary school certificate (non-degree)",
      "Definition": "A certificate or credential that an educational institution awards after a student completes formal schooling lasting from a few weeks to two years after high school. A certificate is not a degree."
    },
    {
      "Term": "Premium",
      "Definition": "The amount of money that has to be paid for an insurance policy."
    },
    {
      "Term": "Prepaid card",
      "Definition": "A card on which you load money in advance to spend. While a prepaid card might look like a debit or credit card, there are differences. A debit card is linked to your checking account. When you use a credit card, you’re borrowing money. A prepaid card is not linked to a checking account or credit union share draft account. In most cases, you can’t spend more money than you have already loaded onto your prepaid card."
    },
    {
      "Term": "Prepayment",
      "Definition": "Payment of all or part of a debt before it comes due."
    },
    {
      "Term": "Prepayment penalty",
      "Definition": "A fee lenders can charge borrowers if they pay off a loan early."
    },
    {
      "Term": "Principal",
      "Definition": "In the lending context, principal is the amount of money that you originally received from the creditor and agreed to pay back on the loan with interest. In the investment context, it is the amount of money you contribute with the expectation of receiving income."
    },
    {
      "Term": "Private college or university (nonprofit)",
      "Definition": "A higher education institution that is primarily supported by private funds. Includes not-for-profit schools and schools associated with a religious organization."
    },
    {
      "Term": "Private student loans",
      "Definition": "These loans are from private organizations, such as banks and credit unions, which set their own terms and conditions. Private loans are generally more expensive than federal loans."
    },
    {
      "Term": "Profit",
      "Definition": "Money that is made in a business after all the costs and expenses are paid."
    },
    {
      "Term": "Property tax",
      "Definition": "Taxes on property, especially real estate, but also can be on boats, automobiles (often paid along with license fees), recreational vehicles, and business inventories."
    },
    {
      "Term": "Protect",
      "Definition": "To make sure that somebody or something isn’t harmed, injured, damaged, or lost."
    },
    {
      "Term": "Public college or university",
      "Definition": "A higher education institution whose programs and activities are operated by publicly elected or appointed school officials and which is supported by public funds."
    },
    {
      "Term": "Public service announcement (PSA)",
      "Definition": "An announcement or message delivered, often on radio or television, for the good of the public."
    },
    {
      "Term": "Raise",
      "Definition": "An increase in the amount of wages or salary."
    },
    {
      "Term": "Rate of return",
      "Definition": "The profit or loss on an investment expressed as a percentage."
    },
    {
      "Term": "Rebate",
      "Definition": "A rebate reduces the price of consumer goods. Most rebates require consumers to pay the full cost of an item at the time of purchase, then to send documentation to the manufacturer or retailer to receive a rebate by mail."
    },
    {
      "Term": "Regular income",
      "Definition": "A set amount of money you receive at the same time each week or month."
    },
    {
      "Term": "Return",
      "Definition": "The profit or loss on an investment."
    },
    {
      "Term": "Risk",
      "Definition": "Exposure to danger, harm, or loss."
    },
    {
      "Term": "Salary",
      "Definition": "Compensation received by an employee for services performed. A salary is a fixed sum paid for a specific period of time worked, such as weekly or monthly."
    },
    {
      "Term": "Sales tax",
      "Definition": "A tax on retail products based on a set percentage of the retail price."
    },
    {
      "Term": "Save",
      "Definition": "Setting something, like money, aside to use in the future."
    },
    {
      "Term": "Savings",
      "Definition": "Money you have set aside in a secure place, such as in a bank account, that you can use for future emergencies or to make specific purchases."
    },
    {
      "Term": "Savings account",
      "Definition": "An account at a bank (sometimes called a share savings account at a credit union) used to set aside money and that pays you interest."
    },
    {
      "Term": "Savings goal",
      "Definition": "The amount of money you plan to put aside for a specific purpose."
    },
    {
      "Term": "Scam",
      "Definition": "A dishonest trick used to cheat somebody out of something important, like money. Scams can happen by phone, email, postal mail, text, or social media."
    },
    {
      "Term": "Scholarships",
      "Definition": "Money that students receive based on academic or other achievements to help pay education expenses. Scholarships generally don’t have to be repaid."
    },
    {
      "Term": "Secured credit card",
      "Definition": "Credit card that typically requires a cash security deposit. The larger the security deposit, the higher the credit limit. Secured cards are often used to build credit history."
    },
    {
      "Term": "Secured loans",
      "Definition": "Loans in which your property (things you own) are used as collateral; if you cannot pay back the loan, the lender will take your collateral to get their money back. The lender can also engage in debt collection, file negative information on your credit report, and may sue you."
    },
    {
      "Term": "Security",
      "Definition": "An investment product such as a stock or bond."
    },
    {
      "Term": "Services",
      "Definition": "Actions that a person does for someone else, such as cutting hair, giving a medical checkup, or fixing a car."
    },
    {
      "Term": "Share",
      "Definition": "A unit of ownership, often in a company’s stock or in a mutual fund."
    },
    {
      "Term": "Short-term goals",
      "Definition": "Goals that can take a short time, or up to five years, to reach."
    },
    {
      "Term": "SMART goals",
      "Definition": "Goals that are specific, measurable, attainable, relevant, and timebound."
    },
    {
      "Term": "Social Security",
      "Definition": "Provides benefits for retired workers and people with disabilities, as well as the unmarried children, surviving spouses, or former spouses (in certain cases) of both."
    },
    {
      "Term": "Social Security number",
      "Definition": "The nine-digit number on a Social Security card, an important piece of identification issued by the federal government that you'll need to get a job and collect government benefits."
    },
    {
      "Term": "Spend",
      "Definition": "The act of using money to buy goods or services."
    },
    {
      "Term": "Spoofing",
      "Definition": "When a caller disguises the information shown on your caller ID to appear as though they are calling as a certain person or from a specific location."
    },
    {
      "Term": "State income tax",
      "Definition": "Most states and some local municipalities require their residents to pay a personal income tax. Generally, states use one of two methods to determine income tax: the graduated income tax or the flat rate income tax. Both methods first require you to figure your taxable income."
    },
    {
      "Term": "Stock",
      "Definition": "A type of investment that gives people a share of ownership in a company."
    },
    {
      "Term": "Student aid report",
      "Definition": "A paper or electronic document that gives you some basic information about your eligibility for federal student aid and lists your answers to the FAFSA questions."
    },
    {
      "Term": "Student loan servicer",
      "Definition": "This is a company that collects payments on student loans, tracks loans while borrowers are in school, responds to borrowers' questions, and handles other tasks associated with loans."
    },
    {
      "Term": "Subscription",
      "Definition": "An agreement that you make with a company to get a publication or service regularly and that you usually pay for in advance."
    },
    {
      "Term": "Supply",
      "Definition": "How much of a product is available to buy at any given time."
    },
    {
      "Term": "Tariff",
      "Definition": "A tax on products imported from foreign countries. This tax can increase the costs of those products, which ultimately can be passed on to consumers as higher prices."
    },
    {
      "Term": "Tax deduction",
      "Definition": "An amount (often a personal or business expense) that reduces income subject to tax."
    },
    {
      "Term": "Tax refund",
      "Definition": "Money owed to taxpayers when their total tax payments are greater than the total tax. Refunds are received from the government."
    },
    {
      "Term": "Tax-related identity theft",
      "Definition": "When someone steals your Social Security number to file a tax return claiming a fraudulent refund; may also be called tax-filing-related identity theft."
    },
    {
      "Term": "Taxes",
      "Definition": "Required payments of money to governments, which use the funds to provide public goods and services for the benefit of the community as a whole."
    },
    {
      "Term": "Term",
      "Definition": "A fixed or limited period of time for which something lasts or is intended to last (for example, a five-year loan, a three-year certificate of deposit, a one-year insurance policy, a 30-year mortgage)."
    },
    {
      "Term": "Tip",
      "Definition": "An optional or extra payment a customer gives to an employee. Also called a gratuity."
    },
    {
      "Term": "Tip income",
      "Definition": "Money and goods received for services performed by food servers, baggage handlers, hairdressers, and others. Tips go beyond the stated amount of the bill and are given voluntarily."
    },
    {
      "Term": "Transaction fee",
      "Definition": "A fee charged every time you use the card for a certain type of transaction. Be sure to ask about fees or read the cardholder agreement associated with your card."
    },
    {
      "Term": "Unauthorized use",
      "Definition": "Transactions to your ATM, debit, or credit card that you didn’t make or approve (such as withdrawals, transfers, purchases, or charges) and for which you received no benefit."
    },
    {
      "Term": "Unbanked",
      "Definition": "Unbanked households don’t have a checking or savings account at an institution that is insured by the Federal Deposit Insurance Corporation (FDIC) or the National Credit Union Administration (NCUA)."
    },
    {
      "Term": "Underbanked",
      "Definition": "A person who has an account at a bank or credit union, but also uses an alternative financial service like a payday loan, check cashing, or a pawn shop loan."
    },
    {
      "Term": "Unearned income",
      "Definition": "Income people receive even if they don’t work for pay. Can include things like children’s allowances, stock dividends paid by corporations, and financial gifts."
    },
    {
      "Term": "Unsecured loan",
      "Definition": "A loan that does not use property as collateral (such as most types of credit cards). Lenders consider these loans to be more risky than secured loans, so they may charge a higher rate of interest for them. If the loan is not paid back as agreed, the lender can also start debt collection, file negative information on your credit report, and can sue you."
    },
    {
      "Term": "U.S. savings bond",
      "Definition": "An interest-bearing savings security issued by the U.S. government for a set amount of money."
    },
    {
      "Term": "Value",
      "Definition": "The amount of money that something is worth."
    },
    {
      "Term": "Variable expenses",
      "Definition": "Expenses that change in amount from month to month."
    },
    {
      "Term": "Virtual currency",
      "Definition": "A kind of electronic money. It’s a digital representation of value that is not issued by a government, such as a central bank or a public authority, but is accepted as a means of payment and can be transferred, stored, or traded electronically."
    },
    {
      "Term": "Volunteer",
      "Definition": "To do something helpful for other people without getting paid to do it."
    },
    {
      "Term": "Wage",
      "Definition": "Compensation received by employees for services performed. Usually, wages are computed by multiplying an hourly pay rate by the number of hours worked."
    },
    {
      "Term": "Wants",
      "Definition": "Upgrades and other things that would be nice to have but aren’t necessary for living, earning, or protecting what you have."
    },
    {
      "Term": "Warranty",
      "Definition": "A manufacturer’s warranty is a promise from that company to pay for some repairs or services. A warranty is for a specific period of time, usually a few years."
    },
    {
      "Term": "Wire transfer fraud",
      "Definition": "Tricking someone into wiring or transferring money to steal from them. One common example of a wire transfer fraud is the “grandparent scam.” This is when a scammer posing as a grandchild or a friend of a grandchild calls to say they are in a foreign country, or in some kind of trouble, and need money wired or sent right away."
    },
    {
      "Term": "Withholding ('pay-as-you-earn' taxes)",
      "Definition": "Money that employers withhold from employees’ paychecks. This money is deposited for the government and is credited against the employees' tax liability when they file their returns. Employers withhold money for federal income taxes, Social Security and Medicare taxes, and state and local income taxes in some states and localities."
    },
    {
      "Term": "Work-study program",
      "Definition": "A federal program that provides part-time jobs for undergraduate and graduate students with financial need, allowing them to earn money to help pay education expenses."
    }
  ];

export default function MaterialDictionary() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}