const SpecificationTable = ({ data }) => {
  return (
    <>
      {data?.specifications !== null && data?.specifications?.length > 0 && (
        <>
          <section>
            <div className="grid-container">
              <div className="sec-area-titles">
                <h3>Specifications</h3>
                <span>{data.name}</span>
              </div>
            </div>
          </section>

          <section>
            <div className="grid-container margin-top-1">
              <div className="spec-area-shadow">
                <div className="specs-area-cont">
                  {data.specifications?.map((item) => (
                    <div className="specs-blocks" key={item.id}>
                      <div className="ppg-spec-table-con">
                        <span className="spec-table-tit">
                          {item.specificationName}
                        </span>
                        <ul className="ppg-spec-table">
                          {item.table &&
                            item.table.map((ele, index) => (
                              <>
                                <li className="tab-left" key={index}>
                                  {" "}
                                  {ele.name}
                                </li>
                                <li className="tab-right">{ele.value}</li>
                              </>
                            ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SpecificationTable;
