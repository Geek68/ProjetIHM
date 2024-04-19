import'../landing/page.css'
export default function Home()
{
    return(<>
        <div className='flex flex-col justify-evenly  h-full'>
            <div className='flex flex-col  gap-10 items-center'>
                 <h1 className='text-4xl'style={{color:"#00A762"}}>Bien le Bonjour 👋👋</h1>
                 <h1 className='text-5xl text-black'>Encore Bienvenu dans MyBank 🤗🤗</h1>
            </div>
            <div className="colonne flex flex-row  items-center justify-evenly">
            <div className="colonne1 h-4/5 flex flex-col gap-6 rounded-3xl py-10 px-6">
                            <h2>Retrait</h2>
                            <h1><span className="text-3xl text-gray-800">Ar 100 000</span> <span className="mois text-xl">/mois</span></h1>
                            <p className="text-black">Transaction d'une Client <span className="HeaderObj">pour retirer<br/> son argent </span>
                                à partir de ce montant
                            </p>
                        </div>
                        <div className="colonne2 flex flex-col gap-10 rounded-3xl py-10 px-6 border border-solid border-gray-400">
                            <h2>Virement</h2>
                            <h1><span className="text-3xl text-gray-800">Ar 100 000</span> <span className="mois text-xl">/mois</span></h1>
                            <p className="text-black">Transaction d'un Client <span className="HeaderObj">pour virer<br/> son argent</span><br/>
                            de son compte à un autre compte d'un<br/> autre client
                            </p>
                           <div className="flex flex-col items-center">
                                 <p className="Condition  items-center rounded-full text-center w-3/5 p-3">Sous-Condition</p>
                                 <p></p>
                           </div>
                        </div>
                        <div className="colonne3  h-4/5 flex flex-col gap-6 rounded-3xl py-10 px-6">
                            <h2>Depôt</h2>
                            <h1><span className="text-3xl text-gray-800">Ar 100 000</span> <span className="mois text-xl">/mois</span></h1>
                            <p className="text-black">Transaction d'un client <span className="HeaderObj">stocker<br/> son argent</span>
                            </p>
                            <p></p>
                        </div>
                    </div>
        </div>
    </>)
}