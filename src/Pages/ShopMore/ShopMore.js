import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ShopMore = () => {
  return (
    <div>
      <Link to="shopmore"></Link>
      <div>
        <div className="text-center mb-6">
          <h2 className="text-5xl font-semibold text-cyan-700 mb-4">
            Shop More!
          </h2>
          <p className="text-2xl">Hurry Up!</p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/x193RnY/Untitled-design-2023-03-08-T132930-357.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title justify-center">Ankel Brace</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$11
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart className="" size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/fQGdxr7/Untitled-design-2023-03-08-T134010-308.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title justify-center">Urin Bags</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$13
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/BCHcV06/Untitled-design-2023-03-08-T134429-619.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title justify-center">LS Belt</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$15
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/zrQHzW8/Untitled-design-2023-03-08-T134951-430.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title  justify-center">
                Heat and Cold Therapy
              </h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$10
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/6mQCxqT/Untitled-design-2023-03-08-T135410-187.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">X Ray Machine</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$8
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/w4sK9SG/Untitled-design-2023-03-08-T140150-467.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title justify-center">Spirometer</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$22
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/qJ36KYQ/Screenshot-308.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title justify-center">Cotton Products</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$9
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/3TbPVm4/Untitled-design-2023-03-08-T141021-807.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title justify-center">Catheter</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$17
              </p>
              <div className="card-actions justify-center">
                <button className="btn bg-cyan-700 btn-wide glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/hc1fdS6/Untitled-design-2023-03-08-T141257-472.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title justify-center">Bandage</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$9
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/fD3HTpN/Screenshot-311.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body  justify-center">
              <h2 className="card-title  justify-center">Dialyzer</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$18
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/K0rvc5z/Untitled-design-2023-03-08-T142027-160.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title  justify-center">Romsons R4 Urine</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$6
              </p>
              <div className="card-actions  justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/4F43yfJ/Untitled-design-2023-03-08-T142355-447.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Dental</h2>
              <p className="text-2xl text-cyan-700 text-center font-semibold">
                Price:$19
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-wide bg-cyan-700 glass">
                  <FaShoppingCart size="2rem" />
                  SHOP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMore;
