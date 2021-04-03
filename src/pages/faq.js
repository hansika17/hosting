import { GetStaticProps } from 'next'
import { FaqModel } from '../../api/Faq'
import Layout from '../components/Layout'
import { openDB } from '../openDB'

export default function Faq({ faq }) {
  return (
    <div>
        <div class="">
          <div class="max-w-7xl mx-auto py-15 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
              <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Frequently asked questions
              </h2>
              <dl class="mt-6 space-y-6 divide-y divide-gray-200">
              {faq.map((f) => (
                <div class="pt-6">
                <dt class="text-lg">
                    <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                      <span class="font-medium text-gray-900">
                      <div key={f.id}> {f.question}</div>
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <svg class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12" id="faq-0">
                    <p class="text-base text-gray-500">
                    <div key={f.id}>  {f.answer}</div>
                    </p>
                  </dd>
                </div>
                 ))}
              </dl>
            </div>
          </div>
        </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const db = await openDB();
  const faq = await db.all('select * from faq order by createDate DESC');
  return { props: { faq } };
}
