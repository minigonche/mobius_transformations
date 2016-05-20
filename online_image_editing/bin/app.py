import web
import mobius_transformations as mbt
import numpy as np
import time


urls = (
  '/','Index'
)

app = web.application(urls, globals())

render = web.template.render('templates/')

class Index(object):
    def GET(self):
        return render.transformacion(a="1",b="0",c="0",d="1",loc="static/inicial.png")


    def POST(self):
        
        form = web.input(a="1",b="1j",c="1j",d="1",loc="static/inicial.png", ref = 0)
        
        print(form.ref)
        
        if(form.ref=="1"):
            return  render.transformacion(a= form.a, b=form.b, c=form.c, d=form.d, loc = "static/inicial.png")
        else:    
            matrix = mbt.give_marix_from_string(form.a,form.b,form.c,form.d)
            print(matrix)
            mbt.apply_matrix_to_image(matrix,'static/inicial.png','static/trans.png')
        
            time.sleep(2)

            return  render.transformacion(a= form.a, b=form.b, c=form.c, d=form.d, loc = "static/trans.png")

if __name__ == "__main__":
    app.run()