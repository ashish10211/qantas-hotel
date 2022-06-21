import getSymbolFromCurrency from "currency-symbol-map";

const Prices: React.FC<{
  price: number;
  save?: number;
  savingCurrency?: string;
  priceCurrency: string;
}> = ({ price, save, savingCurrency, priceCurrency }) => {
  return (
    <div className="flex flex-col">
      <span className="font-light mt-12">1 night total({priceCurrency})</span>

      <>
        <span className="font-bold text-5xl mb-5">
          {getSymbolFromCurrency(priceCurrency)}
          {price}
        </span>
        {save && (
          <span className="font-medium text-red-500 mb-1">
            Save {getSymbolFromCurrency(savingCurrency || "")}
            {save}
          </span>
        )}
      </>
    </div>
  );
};

export default Prices;
