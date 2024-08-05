import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Пицца с сыром",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6101F670D6AA756B1C989E0489.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Завтрак"
                items={[
                  {
                    id: 2,
                    name: "Пицца с сыром",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6101F670D6AA756B1C989E0489.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
