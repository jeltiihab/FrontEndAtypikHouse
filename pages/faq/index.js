import React from 'react';

export default function faq() {

    return (
        <div>
            <section className="text-gray-700">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            FAQ
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Les questions les plus courantes sur le fonctionnement de notre entreprise et ce que
                            peut faire pour vous.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Facturez-vous des frais pour vos services ?
                                </summary>

                                <span>
                        Non, atypikhouse.com ne facture aucun frais pour ses services. Notre service est entièrement gratuit
                         et nous n'ajouterons à votre hébergement aucun frais supplémentaire pour notre service.
                        </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                    Les frais et les taxes sont-ils inclus dans les prix ?
                                </summary>

                                <span>
                        Ceci est différent pour chaque pays et aussi pour chaque type d'hébergement. Pour cette information,
                        veuillez toujours vérifier les conditions de la chambre
                        en cliquant sur le nom de la chambre qui vous intéresse.
                        </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Puis-je réserver vos services par téléphone, e-mail ou fax ?
                                </summary>

                                <span>
                        Malheureusement non. Si vous souhaitez effectuer une réservation,
                        veuillez remplir le formulaire de commande sur notre site Web.
                        </span>
                            </details>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    J'ai fait une réservation mais je n'ai reçu aucune confirmation. Que devrais-je faire?
                                </summary>

                                <span className="px-4 py-2">
                        Avant de finaliser votre réservation, veuillez vérifier votre adresse e-mail car une erreur
                         dans l'adresse e-mail est la raison la plus courante pour laquelle nos clients ne reçoivent
                          pas leurs confirmations. Dans certains cas, nos e-mails peuvent également se retrouver
                           dans le "dossier spam", veuillez donc le vérifier également. Dans tous les cas, veuillez
                            essayer de nous contacter par e-mail car nous serons très heureux de vous aider et de résoudre
                             le problème dans les plus brefs délais.
                        </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Combien de chambres puis-je réserver à la fois ?
                                </summary>

                                <span className="px-4 py-2">
                          Laboris qui labore cillum culpa in sunt quis sint veniam.
                          Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                          minim velit nostrud pariatur culpa magna in aute.
                        </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Pourquoi avez-vous besoin des détails de ma carte de crédit pour les réservations ?
                                </summary>

                                <span className="px-4 py-2">atypikhouse.com agit comme intermédiaire entre nos clients et les hôtels.
                         Les détails de votre carte de crédit sont exigés par les hôtels dans
                          la plupart des cas comme garantie de votre réservation en cas
                           d'annulation tardive ou de « non-présentation ». Les hôtels ont
                            le droit d'effectuer une préautorisation de votre carte de crédit,
                             veuillez donc vous assurer que votre carte de crédit est valide.
                              Veuillez également noter que si vous réservez une chambre non remboursable,
                               ce type de chambre a des conditions particulières et votre carte de crédit
                                sera débitée à l'avance. Veuillez toujours vérifier les conditions
                         de paiement et d'annulation de la chambre qui vous intéresse avant de procéder à la réservation.
                        </span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
