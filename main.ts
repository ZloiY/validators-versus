import { z } from 'zod';
import yup from 'yup';

const zodTest = z.object({
	a: z.string(),
	b: z.object({
		c: z.number(),
		d: z.object({
			e: z.boolean(),
			f: z.object({
				g: z.string(),
			}),
		}),
	}),
});

const yupTest = yup.object({
	a: yup.string().defined(),
	b: yup.object({
		c: yup.number().defined(),
		d: yup.object({
			e: yup.boolean().defined(),
			f: yup.object({
				g: yup.string().defined(),
			}).strict(true),
		}).strict(true),
	}).strict(true),
}).strict(true);

type ZodType = z.infer<typeof zodTest>;
type YupType = yup.InferType<typeof yupTest>;

const gienaPig = {
	a: '1',
	b: {
		c: 2,
		d: {
			e: false,
			f: {
				g: 1
			}
		}
	}
}

console.log('YUP', yupTest.validate(gienaPig));
console.log('ZOD', zodTest.parse(gienaPig));
