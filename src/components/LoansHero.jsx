import { FaCheck } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";


const LoansHero = () => {
	return (
		<div
			className='flex bg-cover bg-center min-h-screen '
			style={{
				backgroundImage:
					'url(https://i.ibb.co/K2Gfcfh/SZLibrary-LA2023-Parents-Kitchen2-5411-rgb-copy-1-2x.jpg)',
			}}>
			<div className='flex items-center p-4 md:p-8 lg:p-16 xl:p-24 text-gray-100 font-bold justify-start max-w-3xl'>
				<div className='space-y-3 text-center lg:text-left'>
					<h1 className='text-2xl md:3xl lg:text-5xl font-bold'>
						Get home on your budget with HavenHunt Home Loans
					</h1>
					<p className=''>
						Start your home buying journey with confidence by getting
						pre-qualified with HavenHunt Home Loans.
					</p>
					<ul className='text-left'>
						<li >
							
							<FaCheck className='inline mr-2' />
							No impact to your credit
						</li>
						<li>
							<FaCheck  className='inline mr-2'/>
							No hidden fees
						</li>
						<li>
							<FaCheck className='inline mr-2' />
							Pre-qualify in as little as 3 minutes
						</li>
					</ul>

					<div className='inline-flex flex-col space-y-3'>
						<button className='btn btn-primary'>Get Pre-qualified</button>
						<button
							onClick={() => document.getElementById('my_modal_5').showModal()}
							className='link'>
							Why get prequalified?
						</button>
					</div>
				</div>
			</div>

			<dialog
				id='my_modal_5'
				className='modal modal-middle'>
				<div className='modal-box w-3/4 max-w-3xl'>
					<div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-12 lg:items-center'>
						<div className='flex flex-col space-y-4'>
							<form method='dialog'>
								{/* if there is a button in form, it will close the modal */}
								<button className='btn btn-circle btn-ghost text-2xl absolute right-2 top-2'>
									<MdCancel/>
								</button>
							</form>
							<h3 className='font-bold text-xl lg:text-3xl'>Why get pre-qualified?</h3>
							<hr />
							<p className='text-justify text-xl'>
								A prequalification letter states that the lender is tentatively
								willing to lend to you, up to a certain amount. Prequalification
								does not guarantee a loan, but it allows you to understand
								what’s in your budget without running a hard credit inquiry.
							</p>
						</div>
						<div>
							<ol className='list-none grow space-y-3 font-bold text-xl '>
								<li> <span className='text-primary'>01. </span>Know what&apos;s in your budget</li>
								<li><span className='text-primary'>02. </span>Reach your financial goals</li>
								<li><span className='text-primary'>03. </span>Connect with certified officers</li>
							</ol>
						</div>
						<div className='lg:col-span-2 w-full mx-auto flex flex-col'>
							<button className='btn btn-primary'>Get Pre-qualified</button>
						</div>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default LoansHero;
