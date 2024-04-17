/* eslint-disable @typescript-eslint/no-explicit-any */
// import PlayButton from '../play-button/play-button.component';

type DisplayProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  def: any;
};
const Display = ({ def }: DisplayProps) => {
  return (
    <div className='mt-4'>
      <div className='py-4 flex justify-between'>
        <div>
          <h1 className='text-5xl font-bold font-serif'>{def.word}</h1>
          <p className='text-2xl text-purple-500'>{def.phonetic}</p>
        </div>
        {/* <PlayButton /> */}
      </div>
      <h3 className='font-bold text-gray-500 font-serif'>Meaning</h3>
      <div className='space-y-4'>
        {def.meanings.map((m: any, id: number) => (
          <div key={id} className='mt-2'>
            <p className='text-3xl font-bold'>{m.partOfSpeech}</p>
            <ul>
              {m.definitions.map((def: any, id: number) => (
                <li
                  key={id}
                  className='mt-2 list-inside list-disc marker:text-purple-500'
                >
                  {def.definition}
                </li>
              ))}
            </ul>
            <div className='flex space-x-6'>
              <div className='synonyms mt-2'>
                {m.synonyms.length > 0 ? (
                  <p className='text-2xl font-bold'>Synonyms</p>
                ) : null}
                <ul className='flex flex-wrap mt-2 mr-4'>
                  {m.synonyms.map((syn: string, id: number) => (
                    <li key={id} className='text-purple-500 mr-2 font-bold'>
                      {syn}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='antonyms mt-2'>
                {m.antonyms.length > 0 ? (
                  <p className='text-2xl font-bold'>antonyms</p>
                ) : null}
                <ul className='flex flex-wrap mt-2 space-x-4'>
                  {m.antonyms.map((ant: string, id: number) => (
                    <li key={id} className='text-purple-500 font-bold'>
                      {ant}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
