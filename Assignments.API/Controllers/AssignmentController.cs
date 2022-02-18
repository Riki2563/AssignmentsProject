
using BLL.Interfaces;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Assignments.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentController : ControllerBase
    {

        IAssignmentBL AssignmentBL;
        public AssignmentController(IAssignmentBL _AssignmentB)
        {
            AssignmentBL = _AssignmentB;
        }
        // GET: api/<AssignmentController>
        [HttpGet]
        public  IActionResult Get()
        {
            try
            { 
                return Ok( AssignmentBL.GetAllAssignment());
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // GET api/<AssignmentController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(AssignmentBL.findById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // POST api/<AssignmentController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Assignment item)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                return Ok(await AssignmentBL.addAssignment(item));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // PUT api/<AssignmentController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Assignment item)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                return Ok(await AssignmentBL.UpdateAssignment(item));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // DELETE api/<AssignmentController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await AssignmentBL.DeleteAssignment(id);

                return StatusCode(Convert.ToInt32(HttpStatusCode.NoContent));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}


