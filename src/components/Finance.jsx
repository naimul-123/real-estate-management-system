const Finance = () => {
	return (
		<div>
			<div className='bg-gray-200 p-10'>
				<div className='w-full mx-auto text-gray-900 my-8 text-center space-y-4'>
					<h2 className='text-2xl md:text-3xl lg:text-5xl text-gray-900 font-bold'>
						How to finance with HavenHunt Home Loans
					</h2>
					<p className='text-base text-gray-600'>
						Not sure where to begin on your home buying journey? Here is a quick
						guide to help you get started.
					</p>
				</div>
				<div className='hero min-h-[50vh]'>
					<div className='hero-content lg:gap-20 flex-col-reverse lg:flex-row'>
						<div className='flex-grow shrink-0 w-full max-w-lg'>
							<div className='collapse collapse-arrow rounded-none bg-base-200'>
								<input
									type='radio'
									name='my-accordion-2'
									defaultChecked
								/>
								<div className='collapse-title text-xl font-medium'>
									1. Prepare your finances
								</div>
								<div className='collapse-content'>
									<p>
										Take some time to review your credit score and income. Avoid
										taking out loans, opening credit cards or making large
										purchases for six months. Then, get a quick estimate of what
										you can afford with our Affordability Calculator.
									</p>
								</div>
							</div>
							<div className='collapse collapse-arrow rounded-none bg-base-200'>
								<input
									type='radio'
									name='my-accordion-2'
								/>
								<div className='collapse-title text-xl font-medium'>
									2. Get pre-qualified
								</div>
								<div className='collapse-content'>
									<p>
										Get an estimate for the amount you will be able to borrow, so
										you can confidently search for homes within your budget.
										With HavenHunt Home Loans, you can get pre-qualified in as
										little as three minutes with no impact to your credit score.
									</p>
								</div>
							</div>
							<div className='collapse collapse-arrow rounded-none bg-base-200'>
								<input
									type='radio'
									name='my-accordion-2'
								/>
								<div className='collapse-title text-xl font-medium'>
									3. Get a verified pre-approval
								</div>
								<div className='collapse-content'>
									<p>
										Getting pre-approved by a lender helps you make a strong and
										competitive offer. A loan officer will verify your income
										and assets, so you will want to prepare documents such as pay
										stubs, W-2&apos;s and bank statements.
									</p>
								</div>
							</div>
							<div className='collapse collapse-arrow rounded-none bg-base-200'>
								<input
									type='radio'
									name='my-accordion-2'
								/>
								<div className='collapse-title text-xl font-medium'>
									4. Apply for a mortgage
								</div>
								<div className='collapse-content'>
									<p>
										After the seller accepts your offer, it&apos;s time to begin the
										formal mortgage application for your new home. Our loan
										officers will be available to provide expert guidance for
										your unique situation, every step of the way.
									</p>
								</div>
							</div>
							<div className='collapse collapse-arrow rounded-none bg-base-200'>
								<input
									type='radio'
									name='my-accordion-2'
								/>
								<div className='collapse-title text-xl font-medium'>
									5. Close on your new home
								</div>
								<div className='collapse-content'>
									<p>
										In most states, you&apos;ll close your loan with an escrow
										company. Once your loan is approved, the lender sets a date
										to finalize the sale and check your credit one last time.
									</p>
								</div>
							</div>
						</div>
						<div className='font-bold text-blue-800 text-2xl'>
							<ul className='steps steps-vertical'>
								<li className='step step-secondary'>Prepare</li>
								<li className='step step-secondary'>Pre-qualified</li>
								<li className='step step-secondary'>Pre-approval</li>
								<li className='step step-secondary'>Apply</li>
								<li className='step step-secondary'>Close</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-blue-950 text-gray-50 p-10'>
				<div className=' text-center'>
					<div className=''>
						<h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>
							Have more questions about financing?
						</h1>
						<p className='py-6'>
							Get pre-qualified and speak with a licensed loan officer or see
							the full list of financing steps in our article about the mortgage
							application process.
						</p>
						<button className='btn btn-primary'>Get Pre-qualified</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Finance;
